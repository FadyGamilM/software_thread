import { User } from "../../types/User";

export interface LoginResponse extends Pick<User, "id" | "firstName" | "lastName" | "username" | "email"> { }