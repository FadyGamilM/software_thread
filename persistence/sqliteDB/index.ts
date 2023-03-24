import { open as openSqlite, Database } from "sqlite";
import { Comment } from "../../types/Comment";
import { Like } from "../../types/Like";
import { Thread } from "../../types/Thread";
import { User } from "../../types/User";
import { datastore } from "../abstractions/datastore";
import path from "path";
//  the database driver itself
import sqlite3 from "sqlite3";
// the software wrapper above the sqlite3 driver
import sqlite from "sqlite";

class SqliteDataStore implements datastore
{
   //! initialize this db property later
   private db!: Database<sqlite3.Database, sqlite3.Statement>;

   //! CONNECT TO DATABASE AND RETURN INSTANCE OF THIS CLASS
   public async connect()
   {
      //* connect to the database
      this.db = await openSqlite({
         filename: path.join(__dirname, "software_thread.sqlite"),
         driver: sqlite3.Database,
      });

      //* adjust the default behaviour of sqlite which is not enforcing the refrential integrity
      this.db.run(`PRAGMA foreign_keys = ON;`);

      //* apply migrations
      await this.db.migrate({
         migrationsPath: path.join(__dirname, "migrations"),
      });



      //* now return an instance of the class itself
      return this;
   }

   constructor() { }
   CreateUser(user: User): Promise<void>
   {
      throw new Error("Method not implemented.");
   }
   GetUserByEmail(email: string): Promise<User | undefined>
   {
      throw new Error("Method not implemented.");
   }
   GetUserByUsername(username: string): Promise<User | undefined>
   {
      throw new Error("Method not implemented.");
   }
   GetThreadLikes(threadId: number): Promise<Like[]>
   {
      throw new Error("Method not implemented.");
   }
   AddLikeToThread(like: Like): Promise<void>
   {
      throw new Error("Method not implemented.");
   }
   DislikeThread(like: Like): Promise<void>
   {
      throw new Error("Method not implemented.");
   }
   ListComments(threadId: number): Promise<Comment[]>
   {
      throw new Error("Method not implemented.");
   }
   AddComment(comment: Comment): Promise<void>
   {
      throw new Error("Method not implemented.");
   }

   async ListAllThreads(): Promise<Thread[]>
   {
      return await this.db.all<Thread[]>(`SELECT * FROM threads`);
   }

   async CreateNewThread(thread: Thread): Promise<void>
   {
      await this.db.run(
         `INSERT INTO threads ( title, url, user_id, is_removed, created_at) VALUES (?, ?, ?, ?, ?)`,
         thread.title,
         thread.url,
         thread.userId,
         thread.isRemoved,
         thread.createdAt
      );
   }

   GetThreadById(threadId: number): Promise<Thread | undefined>
   {
      throw new Error("Method not implemented.");
   }
   DeleteThreadById(threadId: number): Promise<void>
   {
      throw new Error("Method not implemented.");
   }
}

// decare the db object
export let db: datastore;
// instantiate it
export const InitDB = async () =>
{
   db = await new SqliteDataStore().connect();
};
