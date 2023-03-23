import { Comment } from '../../types/Comment';
import { Like } from '../../types/Like';
import { Thread } from '../../types/Thread';
import { User } from '../../types/User';
import { datastore } from '../abstractions/datastore';

export class InMemDataStore implements datastore {
    //! define the store entities
    private users: User[] = []
    private threads: Thread[] = []
    private likes: Like[] = []
    private comments: Comment[] = []


    // implement the data store abstraction
    CreateUser(user: User): void {
        this.users.push(user)
    }

    GetUserByEmail(email: string): User | undefined {
        let existingUser: User | undefined = this.users.find(
            (user) => user.email === email ? user : undefined
        )
        return existingUser
    }

    GetUserByUsername(username: string): User | undefined {
        let existingUser: User | undefined = this.users.find(
            (user) => user.username === username ? user : undefined
        )
        return existingUser
    }

    GetThreadLikes(threadId: number): Like[] {
        const allLikes: Like[] = this.likes.filter(like => like.threadId === threadId)
        return allLikes;
    }

    AddLikeToThread(like: Like): void {
        this.likes.push(like)
    }

    DislikeThread(like: Like): void {
        this.likes.find((aLike) => {
            if (like.id === aLike.id)
                aLike.isRemoved = true
        })
    }

    ListComments(threadId: number): Comment[] {
        return this.comments
    }

    AddComment(comment: Comment): void {
        this.comments.push(comment)
    }

    ListAllThreads(): Thread[] {
        return this.threads;
    }

    CreateNewThread(thread: Thread): void {
        this.threads.push(thread)
    }

    GetThreadById(threadId: number): Thread | undefined {
        let foundThread: Thread | undefined = this.threads.find(t => t.id === threadId)
        return foundThread === undefined ? undefined : foundThread
    }

    DeleteThreadById(threadId: number): void {
        this.threads.find(
            thread => {
                if (threadId === thread.id)
                    thread.isRemoved = true
            }
        )
    }
}