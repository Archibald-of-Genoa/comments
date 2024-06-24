import { v4 as uuidv4 } from 'uuid';
import User from "./User";





interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  rating: number;
  replies: Comment[];
  isFavorite: boolean;
  isReply: boolean;
}

class Comment implements Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  rating: number;
  replies: Comment[];
  isFavorite: boolean;
  isReply: boolean; 

  constructor(author: User, content: string) {
    this.id = uuidv4();
    this.author = author;
    this.content = content;
    this.timestamp = this.getFormattedDate();
    this.rating = 0;
    this.replies = [];
    this.isFavorite = false;
    this.isReply = false;
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
