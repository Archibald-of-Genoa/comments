import "./styles/reset.css";
import "./styles/style.scss";

import { loadUserData } from "./loadUserData";
import { commentsFilter } from "./commentsFilter";
import { newCommentForm } from "./newCommentForm";
import Layout from "./Layout";

document.addEventListener("DOMContentLoaded", function () {
  new Layout(9);

  loadUserData("https://randomuser.me/api/").then((userData) => {
    if (userData) {
      const userAvatarImage = userData.avatar;
      const userAvatar =
        document.querySelectorAll<HTMLImageElement>(".userAvatar");

      userAvatar.forEach((avatar) => {
        if (avatar) {
          avatar.src = userAvatarImage;
        } else {
          console.log("No user data received");
        }
      });
    }
  });

  const commentForm = <HTMLFormElement | null>(
    document.getElementById("commentForm")
  );
  const publishedComment = <HTMLElement | null>(
    document.querySelector(".publishedComment")
  );
  const date = document.querySelectorAll<HTMLDivElement | null>(".date");

  function getFormattedDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    return `${day}.${month} ${hours}:${minutes}`;
  }

  // commentForm.addEventListener("submit", function (event: Event) {
  //   event.preventDefault();
  //   const newPublishedComment = document.createElement("div");

  //   const commentText = textarea.value;
  //   if (commentText.trim() === "") return;

  //   textarea.value = "";

  //   newPublishedComment.innerHTML = `
  //   <div class="publishedComment">
  //           <img class="userAvatar" alt="Аватар пользователя" />

  //           <div class="userNameAndFormWrapper">

  //               <div class="userNameWrapper">
  //                 <span class="userName"></span>

  //                 <div class="date">${getFormattedDate()}</div>
  //               </div>

  //               <div class="publishedCommentText">${commentText}</div>
  //           </div>

  //           <div class="actionButtons">
  //             <button class="reply">Ответить</button>
  //           </div>

  //         </div>
  //   `;

  //   commentsBlock.appendChild(newPublishedComment);

  //   const publishedCommentText = <HTMLElement | null>(
  //     document.querySelector(".publishedCommentText")
  //   );
  // });
});
