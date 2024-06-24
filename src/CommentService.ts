import Comment from "./Comment";
import { stringify, parse } from "flatted";

class CommentService {
  private localStorageKey = "comments";

  loadComments(): Comment[] {
    const storedComments = localStorage.getItem(this.localStorageKey);
    return storedComments ? parse(storedComments) : [];
  }

  saveComments(comments: Comment[]): void {
    localStorage.setItem(this.localStorageKey, stringify(comments));
  }

  addComment(comment: Comment): void {
    const comments = this.loadComments();
    comments.push(comment);
    this.saveComments(comments);
  }

  toggleFavorite(commentId: string): Comment | undefined {
    const comments = this.loadComments();
    const comment = comments.find((c) => c.id === commentId);
    if (comment) {
      comment.isFavorite = !comment.isFavorite;
      this.saveComments(comments);
    }
    return comment;
  }

  updateRating(commentId: string, increment: boolean): void {
    const comments = this.loadComments();
    const comment = comments.find((c) => c.id === commentId);
    if (comment) {
      comment.rating += increment ? 1 : -1;
      this.saveComments(comments);
    }
  }

  parseTimestamp(timestamp: string): Date {
    const [dayMonth, time] = timestamp.split(" ");
    const [day, month] = dayMonth.split(".").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    const now = new Date();
    const year = now.getFullYear();

    return new Date(year, month - 1, day, hours, minutes, 0);
  }

  sortByDate(): Comment[] {
    return this.loadComments().sort(
      (a, b) =>
        this.parseTimestamp(b.timestamp).getTime() - this.parseTimestamp(a.timestamp).getTime()
    );
  }

  sortByRating(): Comment[] {
    return this.loadComments().sort((a, b) => b.rating - a.rating);
  }

sortByAnswers(): Comment[] {
  const comments = this.loadComments();
  console.log("Before sorting by answers:", comments);
  
  const sortedComments = comments.sort((a, b) => b.replies.length - a.replies.length);
  
  console.log("After sorting by answers:", sortedComments);
  return sortedComments;
}
}

export default CommentService;
