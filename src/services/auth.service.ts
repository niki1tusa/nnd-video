import Cookies from 'js-cookie';

import { clearAuthData, setAuthData } from '@/store/auth.slice';

import { axiosClassic } from '@/api/axios';

import { store } from '@/store';
import type { AuthDataTypes } from '@/types/auth-form.types';
import type { UserTypes } from '@/types/user.types';
import { EnumTokens } from '@/types/enum-token.types';


interface AuthResponse {
	user: UserTypes;
	accessToken: string;
}

class AuthService {
	private _AUTH = '/auth';
	private _SAVE_TOKEN_STORAGE(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: 'localhost',
			sameSite: 'strict',
			expires: 1,
		});
	}
	private _REMOVE_FROM_STORAGE() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN);
	}

	async main(type: 'login' | 'register', data: AuthDataTypes, recaptchaToken?: string | null) {
		const response = await axiosClassic.post<AuthResponse>(`${this._AUTH}/${type}`, data, {
			headers: {
				recaptcha: recaptchaToken,
			},
		});
		const token = response.data.accessToken;
		if (token) {
			this._SAVE_TOKEN_STORAGE(token);
			store.dispatch(setAuthData(response.data));
		}
		return response;
	}
	async logout() {
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`);
		if (response.data) {
			this._REMOVE_FROM_STORAGE()
					store.dispatch(clearAuthData())
};
		return response;
	}

	// by client
	async getNewTokens() {
		const response = await axiosClassic.post<AuthResponse>(`${this._AUTH}/access-token`);
		const token = response.data.accessToken;
		if (token) {
			this._SAVE_TOKEN_STORAGE(token);
			store.dispatch(setAuthData(response.data));
		}
		return response;
	}
	// by server
	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<AuthResponse>(
			`${this._AUTH}/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`,
				},
			}
		);
		return response;
	}
}

export const authService = new AuthService();
