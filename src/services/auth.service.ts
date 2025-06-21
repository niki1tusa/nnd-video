import Cookies from 'js-cookie';

import { clearAuthData, setAuthData } from '@/store/auth.slice';

import { axiosClassic } from '@/api/axios';

import { store } from '@/store';
import type { AuthDataTypes } from '@/types/auth-form.types';
import { EnumTokens } from '@/types/enum-token.types';
import type { UserTypes } from '@/types/user.types';

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
			expires: 1 / 24,
			secure: true,
		});
	}
	REMOVE_FROM_STORAGE() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN);
		store.dispatch(clearAuthData());
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
			this.REMOVE_FROM_STORAGE();
		}
		return response;
	}

	async initializeAuth() {
		const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
		if (accessToken) return;
		try {
			await this.getNewTokens()
		} catch(error) {
			store.dispatch(clearAuthData())
		}
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
