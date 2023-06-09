import { Like } from "../types/Like";
export interface LikeDao
{
    // get all likes of specific thread given the thread id
    GetThreadLikes(threadId: number): Promise<Like[]>;

    // add a new like to a specific thread given the thread id 
    AddLikeToThread(like: Like): Promise<void>;

    // remove a like from a given thread
    DislikeThread(like: Like): Promise<void>;
}