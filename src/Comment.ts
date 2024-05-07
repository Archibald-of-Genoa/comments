import User from "./User";

interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  rating: number;
  replies: Comment[];
  isFavorite: boolean;
}


class Comment implements Comment{
  id: string;
  author: User;
  content: string;
  timestamp: string;
  rating: number;
  replies: Comment[];
  isFavorite: boolean;

  constructor(
      id: string,
      author: User,
      content: string,
      timestamp: string,
      rating: number = 0,
      replies: Comment[] = [],
      isFavorite: boolean = false
  ) {
      this.id = id;
      this.author = author;
      this.content = content;
      this.timestamp = this.getFormattedDate();
      this.rating = rating;
      this.replies = replies;
      this.isFavorite = isFavorite;
  }

  addReply(comment: Comment): void {
      this.replies.push(comment);
  }

  getFormattedDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    return `${day}.${month} ${hours}:${minutes}`;
  }
}

export default Comment;