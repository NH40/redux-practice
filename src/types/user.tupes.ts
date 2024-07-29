export interface IUser {
	id: number
	name: string
}

export interface IUserState {
	isLoading: boolean
	error: null | string
	user: IUser
}
