export interface User
{
    id: number,
    firstName: string,
    lastname: string,
    email?: string,
    password?: string,
    username: string,
    isRemoved: boolean,
    createdAt: number;
}

