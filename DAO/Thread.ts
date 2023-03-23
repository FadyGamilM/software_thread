import { Thread } from "../types/Thread"

export interface ThreadDao {
    // a method to fetch all threads 
    ListAllThreads(): Thread[]

    // create a new thread 
    CreateNewThread(thread: Thread): void

    // return a thread by id 
    GetThreadById(threadId: number): Thread | undefined

    // delete a thread
    DeleteThreadById(threadId: number): void
}