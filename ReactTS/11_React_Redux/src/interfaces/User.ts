export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserId extends User {
	id: string;
}
