
interface IUser {
  uuid: string;
  username: string;
  avatar: string;
}

export async function loadUserData(url: string): Promise<IUser | null> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        return {
            uuid: data.results[0].login.uuid,
            username: data.results[0].login.username,
            avatar: data.results[0].picture.large,
        }

        
      } catch (error) {
        console.error("Ошибка при получении данных", error);
        return null;
      }
}