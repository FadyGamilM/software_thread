import { ThreadDao } from '../../DAO/Thread';
import { CommentDao } from '../../DAO/Comment';
import { UserDao } from '../../DAO/User';
import { LikeDao } from '../../DAO/Like';


// any datastore must supports all others DAOs functionalities 
export interface datastore extends UserDao, LikeDao, CommentDao, ThreadDao { }