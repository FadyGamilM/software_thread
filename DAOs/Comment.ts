import { Comment } from "../types/Comment";
export interface CommentDao
{
    // list all comments of specific thread 
    ListComments(threadId: number): Promise<Comment[]>;

    // add comment 
    AddComment(comment: Comment): Promise<void>;

}