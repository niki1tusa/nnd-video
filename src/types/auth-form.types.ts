export interface AuthDataTypes {
	email: string;
	password: string;
}
export interface FormProps extends AuthDataTypes {
	passwordAgain?: string;
}
