import { UUID } from "crypto";

interface ISingleComment {
  userId: UUID;
  userName: string;
  avatar: string;
}

class SingleComment implements ISingleComment {
  userId: UUID;
  userName: string;
  avatar: string;

  constructor(userId: UUID, userName: string, avatar: string) {
    this.userId = userId;
    this.userName = userName;
    this.avatar = avatar;
  }




}

export default SingleComment;