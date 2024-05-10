import { UUID } from "crypto";

interface User {
  userId: UUID;
  userName: string;
  avatar: string;
}

class User implements User {
  userId: UUID;
  userName: string;
  avatar: string;

  constructor(userId: UUID, userName: string, avatar: string) {
    this.userId = userId;
    this.userName = userName;
    this.avatar = avatar;
  }

}

export default User;
