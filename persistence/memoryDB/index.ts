import { Comment } from "../../types/Comment";
import { Like } from "../../types/Like";
import { Thread } from "../../types/Thread";
import { User } from "../../types/User";
import { datastore } from "../abstractions/datastore";

export class InMemDataStore implements datastore
{
    //! define the store entities
    private users: User[] = [];
    private threads: Thread[] = [];
    private likes: Like[] = [];
    private comments: Comment[] = [];

    // implement the data store abstraction
    CreateUser(user: User): Promise<void>
    {
        this.users.push(user);
        return Promise.resolve();
    }

    GetUserByEmail(email: string): Promise<User | undefined>
    {
        let existingUser: User | undefined = this.users.find((user) =>
            user.email === email ? user : undefined
        );
        return Promise.resolve(existingUser);
    }

    GetUserByUsername(username: string): Promise<User | undefined>
    {
        let existingUser: User | undefined = this.users.find((user) =>
            user.username === username ? user : undefined
        );
        return Promise.resolve(existingUser);
    }

    GetThreadLikes(threadId: number): Promise<Like[]>
    {
        const allLikes: Like[] = this.likes.filter(
            (like) => like.threadId === threadId
        );
        return Promise.resolve(allLikes);
    }

    AddLikeToThread(like: Like): Promise<void>
    {
        this.likes.push(like);
        return Promise.resolve();
    }

    DislikeThread(like: Like): Promise<void>
    {
        this.likes.find((aLike) =>
        {
            if (like.id === aLike.id) aLike.isRemoved = true;
        });
        return Promise.resolve();
    }

    ListComments(threadId: number): Promise<Comment[]>
    {
        return Promise.resolve(this.comments);
    }

    AddComment(comment: Comment): Promise<void>
    {
        this.comments.push(comment);
        return Promise.resolve();
    }

    ListAllThreads(): Promise<Thread[]>
    {
        return Promise.resolve(this.threads);
    }

    CreateNewThread(thread: Thread): Promise<void>
    {
        console.log("db : ", this.threads);
        this.threads.push(thread);
        console.log("db : ", this.threads);
        return Promise.resolve();
    }

    GetThreadById(threadId: number): Promise<Thread | undefined>
    {
        let foundThread: Thread | undefined = this.threads.find(
            (t) => t.id === threadId
        );
        return foundThread === undefined
            ? Promise.resolve(undefined)
            : Promise.resolve(foundThread);
    }

    DeleteThreadById(threadId: number): Promise<void>
    {
        this.threads.find((thread) =>
        {
            if (threadId === thread.id) thread.isRemoved = true;
        });
        return Promise.resolve();
    }
}

// decare the db object 
export let db: datastore;
// instantiate it 
export const InitDB = async () =>
{
    return db = new InMemDataStore();
};
