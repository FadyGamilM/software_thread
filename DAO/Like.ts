import { Like } from "../types/Like"
export interface LikeDao {
    // get all likes of specific thread given the thread id
    GetThreadLikes(threadId: number): Like[]

    // add a new like to a specific thread given the thread id 
    AddLikeToThread(like: Like): void

    // remove a like from a given thread
    DislikeThread(like: Like): void
}