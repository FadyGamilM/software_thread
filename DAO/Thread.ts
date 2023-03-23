import { Thread } from "../types/Thread"

export interface ThreadDato {
    // a method to fetch all threads 
    ListAllThreads(): Thread[]

    // create a new thread 
    CreateNewThread(thread: Thread): void

    // return a thread by id 
    GetThreadById(threadId: number): Thread

    // delete a thread
    DeleteThreadById(threadId: number): void
}