import { Thread } from "../types/Thread";

export interface ThreadDao
{
    // a method to fetch all threads 
    ListAllThreads(): Promise<Thread[]>;

    // create a new thread 
    CreateNewThread(thread: Thread): Promise<void>;

    // return a thread by id 
    GetThreadById(threadId: number): Promise<Thread | undefined>;

    // delete a thread
    DeleteThreadById(threadId: number): Promise<void>;
}