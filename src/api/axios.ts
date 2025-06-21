import { API_URL } from "@/constants/constants";
import { EnumTokens } from "@/types/enum-token.types";
import type { CreateAxiosDefaults } from "axios";
import axios from "axios";
import Cookies from "js-cookie";
import { errorCatch } from "./api.helper";
import { authService } from "@/services/auth.service";
const options: CreateAxiosDefaults = {
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

export const axiosClassic = axios.create(options)

// custom
export const instance = axios.create(options)
instance.interceptors.request.use(config=>{
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    if(config.headers && accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

instance.interceptors.response.use(config=>config, async error=>{
    const originalRequest =  error.config
    if(error.response.status === 401 || errorCatch(error) === 'jwt expired' || errorCatch(error) === 'jwt must be provided' || originalRequest && !originalRequest._isRetry){
        originalRequest._isRetry = true

        try {
            await authService.getNewTokens()
            return instance.request(originalRequest)
        } catch(error) {
            if(errorCatch(error) === 'jwt expired' || errorCatch(error) === 'Refresh token not passed'){
                authService.REMOVE_FROM_STORAGE()
                throw error
            }
        }
    }
    throw error
})