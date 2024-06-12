import { commentsBlock, publishedCommentID } from ".";
import { textarea } from ".";
import Comment from "./Comment";

class UIManager {
  avatar: string;
  userName: string;
  reply?: boolean;

  updateAvatar(avatar: string) {
    this.avatar = avatar;

    const userAvatar: HTMLImageElement | null = document.querySelector(".userAvatar");

    userAvatar.src = avatar;
  }

  updateUserName(userName: string) {
    this.userName = userName;

    const userNameElement: HTMLDivElement | null = document.querySelector(".userName");
    userNameElement.textContent = this.userName;
  }

  addReplyUI(Comment: Comment) {
    const parentComment = document.querySelector(
      `.publishedCommentBlock[data-newComment-id="${publishedCommentID}"]`
    );
    const newReply: HTMLDivElement = document.createElement("div");
    newReply.classList.add("repliedComment");
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
    
      <div class="publishedCommentText">${Comment.content}</div>
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
    parentComment.appendChild(newReply);
    textarea.value = "";

  }

  addCommentUI(Comment: Comment) {
    const newComment: HTMLDivElement = document.createElement("div");
    newComment.classList.add("publishedCommentBlock");

    newComment.innerHTML = /*html*/ `
            <div class="publishedComment">
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
            
              <div class="publishedCommentText">${Comment.content}</div>
              <div class="actionButtons">
                <button class="reply">Ответить</button>
                <button class="toFavorite" data-comment-id="${Comment.id}">
                  В избранное
                </button>
                <div class="ratingControl">
                  <button class="decreaseRating" title="Опустить рейтинг">-</button>
                  <span class="ratingCount">${Comment.rating}</span>
                  <button class="increaseRating" title="Поднять рейтинг">+</button>
                </div>
              </div>
            </div>
            </div>
            
    `;
    newComment.setAttribute("data-newComment-id", Comment.id);

    commentsBlock.appendChild(newComment);
    textarea.value = "";
  }

  renderComments(comments: Comment[]) {
    commentsBlock.innerHTML = "";
    comments.forEach(comment => this.addCommentUI(comment))
  }
}

export default UIManager;
