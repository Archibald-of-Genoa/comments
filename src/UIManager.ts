import { commentsBlock } from ".";
import { UUID } from "crypto";
import { textarea } from ".";
import Comment from "./Comment";
import CommentService from "./CommentService";

class UIManager {
  avatar: string;
  userName: string;
  reply?: boolean;

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

  addCommentUI(Comment: Comment, reply?: boolean) {
    if (reply) {
      const newReply: HTMLDivElement = document.createElement("div");
      newReply.classList.add("repliedComment");
      const repliedText = textarea.value;
      newReply.innerHTML = /*html*/ `
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
    
      <div class="publishedCommentText">${repliedText}</div>
      <div class="actionButtons">
        <button class="toFavorite" data-comment-id="${Comment.id}">
          В избранное
        </button>
        <div class="ratingControl">
          <button class="decreaseRating" title="Опустить рейтинг">-</button>
          <span class="ratingCount">0</span>
          <button class="increaseRating" title="Поднять рейтинг">+</button>
        </div>
      </div>
    </div>
      `;
      commentsBlock.appendChild(newReply);
      textarea.value = "";

    } else {
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
                <button class="toFavorite" data-comment-id="${Comment.id}">
                  В избранное
                </button>
                <div class="ratingControl">
                  <button class="decreaseRating" title="Опустить рейтинг">-</button>
                  <span class="ratingCount">0</span>
                  <button class="increaseRating" title="Поднять рейтинг">+</button>
                </div>
              </div>
            </div>
    `;

      commentsBlock.appendChild(newComment);
      textarea.value = "";
      console.log('newComment');
    }
  }
}

export default UIManager;
