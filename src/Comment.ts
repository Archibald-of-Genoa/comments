import User from "./User";

interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: Date;
  rating: number;
  replies: Comment[];
  isFavorite: boolean;
}


class Comment implements Comment{
  id: string;
  author: User;
  content: string;
  timestamp: Date;
  rating: number;
  replies: Comment[];
  isFavorite: boolean;

  constructor(
      id: string,
      author: User,
      content: string,
      timestamp: Date,
      rating: number = 0,
      replies: Comment[] = [],
      isFavorite: boolean = false
  ) {
      this.id = id;
      this.author = author;
      this.content = content;
      this.timestamp = timestamp;
      this.rating = rating;
      this.replies = replies;
      this.isFavorite = isFavorite;
  }

  addReply(comment: Comment): void {
      this.replies.push(comment);
  }
}

export default Comment;