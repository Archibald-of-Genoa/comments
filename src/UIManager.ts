import { commentsBlock } from ".";
import { UUID } from "crypto";
import { textarea } from ".";
import Comment from "./Comment";
import CommentService from "./CommentService";

class UIManager {
  avatar: string;
  userName: string;

  updateAvatar(avatar: string) {
    this.avatar = avatar;

    const userAvatar: HTMLImageElement | null =
      document.querySelector(".userAvatar");

    userAvatar.src = avatar;
  }

  updateUserName(userName: string) {
    this.userName = userName;

    const userNameElement: HTMLDivElement | null =
      document.querySelector(".userName");
    userNameElement.textContent = this.userName;
  }

  addCommentUI(Comment: Comment) {
    const newComment: HTMLDivElement = document.createElement("div");
    newComment.classList.add("publishedComment");
    const commentText = textarea.value;

    newComment.innerHTML = /*html*/ `
    <img
    class="commentAvatar"
    src="${Comment.author.avatar}"
    alt="Аватар пользователя"
  />
  
  <div class="userNameAndFormWrapper">
    <div class="userNameWrapper">
      <span class="commentUserName">${Comment.author.userName}</span>
  
      <div class="date">${Comment.timestamp}</div>
    </div>
  
    <div class="publishedCommentText">${commentText}</div>
    <div class="actionButtons">
      <button class="reply">Ответить</button>
      <button class="toFavorite" data-comment-id="${Comment.id}">В избранное</button>
    </div>
  </div>



    `;

    commentsBlock.appendChild(newComment);
    textarea.value = "";
  }
}

export default UIManager;
