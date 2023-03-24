import { ThreadDao } from '../../DAOs/Thread';
import { CommentDao } from '../../DAOs/Comment';
import { UserDao } from '../../DAOs/User';
import { LikeDao } from '../../DAOs/Like';


// any datastore must supports all others DAOs functionalities 
export interface datastore extends UserDao, LikeDao, CommentDao, ThreadDao { }