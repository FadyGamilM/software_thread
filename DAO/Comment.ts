import { Comment } from "../types/Comment"
export interface CommentDao {
    // list all comments of specific thread 
    ListComments(threadId: number): Comment[]

    // add comment 
    AddComment(comment: Comment): void

}