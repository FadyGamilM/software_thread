import { Thread } from "../../types/Thread";

export interface CreateThreadRequest extends Pick<Thread, "title" | "url" | "userId"> { }