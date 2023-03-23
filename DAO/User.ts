import { User } from "../types/User"
// abstractions of all functionalities to handle the user entity from database to our service logic 
export interface UserDao {
    // method to createa a new user 
    CreateUser(user: User): void

    // method to check if user is signed in
    // this method fetch the user by email and return it if its found
    // or return undefined if its not found
    GetUserByEmail(email: string): User | undefined

    // same as `getUserByEmail`   
    GetUserByUsername(username: string): User | undefined
}