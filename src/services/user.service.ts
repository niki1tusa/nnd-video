import { instance } from "@/api/axios";
import type { FullUserTypes } from "@/types/user.types";



class UserService {
	private _USERS = '/users';

	getProfile() {
		return instance.get<FullUserTypes>(`${this._USERS}/profile`);
	}
}
export const userService = new UserService();
