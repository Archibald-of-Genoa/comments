import Comment from "./Comment";


class CommentService {
    private localStorageKey = 'comments';

    loadComments(): Comment[] {
        const storedComments = localStorage.getItem(this.localStorageKey);
        return storedComments ? JSON.parse(storedComments) : [];
    }

    saveComments(comments: Comment[]): void {
        localStorage.setItem(this.localStorageKey, JSON.stringify(comments));
    }

    addComment(comment: Comment): void {
        const comments = this.loadComments();
        comments.push(comment);
        this.saveComments(comments)
    }

    toggleFavorite(commentId: string): Comment | undefined {
        const comments = this.loadComments();
        const comment = comments.find(c => c.id === commentId);
        if (comment) {
            comment.isFavorite = !comment.isFavorite;
            this.saveComments(comments);
        }
        return comment;
    }

    updateRating(commentId: string, increment: boolean): void {
        const comments = this.loadComments();
        const comment = comments.find(c => c.id === commentId);
        if (comment) {
            comment.rating += increment ? 1 : -1;
            this.saveComments(comments);
        }
    }





}

export default CommentService;