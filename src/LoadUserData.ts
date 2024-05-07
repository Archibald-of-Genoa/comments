import { UUID } from "crypto";
import User from "./User";

class LoadUserData implements User {
  private userData: User | null = null;

  userId: UUID;
  userName: string;
  avatar: string;

  constructor() {
    this.userData = null;
  }

  async load(url: string): Promise<User | null> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      this.userData = {
        userId: data.results[0].login.uuid,
        userName: data.results[0].login.username,
        avatar: data.results[0].picture.large,
      };
      return this.userData;

    } catch (error) {
      console.error("Ошибка при получении данных", error);
      this.userData = null;
    }
  }


  getData(): User | null {
    return this.userData;
  }
}

export default LoadUserData;