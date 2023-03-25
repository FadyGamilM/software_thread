export interface User
{
    id: number,
    firstName: string,
    lastName: string,
    email?: string,
    password?: string,
    username: string,
    isRemoved: boolean,
    createdAt: number;
}

