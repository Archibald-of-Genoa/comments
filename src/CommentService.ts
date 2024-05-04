import { json } from "stream/consumers";
import SingleComment from "./SingleComment";
interface ICommentService {
    example: SingleComment;
}
class CommentService {
    private comments: SingleComment[] = [];
    private storageKey: string = 'comments';

    constructor(example: SingleComment) {
        this.addComment(example);
    }

    addComment(example: SingleComment) {
    }

}

export default CommentService;