import { json } from "stream/consumers";
import SingleComment from "./Comment";
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
        localStorage.setItem("one", JSON.stringify(example));
        console.log(localStorage.getItem("one"));
    }

}

export default CommentService;