import { instance } from "@/api/axios";
import type { ISettingsData } from "@/types/settings.types";
import type { FullUserTypes } from "@/types/user.types";



class UserService {
	private _USERS = '/users';

	getProfile() {
		return instance.get<FullUserTypes>(`${this._USERS}/profile`);
	}
		updateProfile(data: ISettingsData) {
		return instance.put<boolean>(`${this._USERS}/profile`, data);
	}

}
export const userService = new UserService();
