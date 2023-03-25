import { User } from "../../types/User";

export interface SignupRequest extends Pick<User, "firstName" | "lastName" | "username" | "email" | "password"> { }