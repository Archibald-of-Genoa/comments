import { commentsBlock } from ".";
import { UUID } from "crypto";
import { textarea } from ".";

class UIManager {
  avatar: string;
  userName: string;


  updateAvatar(avatar: string) {
    this.avatar = avatar;

    const userAvatar =
      document.querySelectorAll<HTMLImageElement>(".userAvatar");

    userAvatar.forEach((avatarElement) => {
      avatarElement.src = avatar;
    });
  }

  updateUserName(userName: string) {
    this.userName = userName;

    const userNameElement = document.querySelectorAll<HTMLDivElement>(".userName");
    userNameElement.forEach((name) => (name.textContent = this.userName));
  }

  addCommentUI() {
    const newComment: HTMLDivElement = document.createElement("div");
    newComment.classList.add('publishedComment');
    const commentText = textarea.value;

    newComment.innerHTML = `
    <div class="publishedComment">
            <img class="userAvatar" alt="Аватар пользователя" />

            <div class="userNameAndFormWrapper">

                <div class="userNameWrapper">
                  <span class="userName"></span>

                  <div class="date"></div>
                </div>

                <div class="publishedCommentText">${commentText}</div>
            </div>

            <div class="actionButtons">
              <button class="reply">Ответить</button>
            </div>

          </div>
    `;

    commentsBlock.appendChild(newComment);
  }


}

export default UIManager;
