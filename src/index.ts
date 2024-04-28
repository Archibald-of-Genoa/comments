import "./styles/reset.css";
import "./styles/style.scss";
import arrowImage from "@/assets/Arrow.svg";
import heartImage from "@/assets/heart.svg";
import replyImage from "@/assets/reply.svg";

document.addEventListener("DOMContentLoaded", function () {
  const contentMock = document.querySelector(".contentMock");
  const contentMockCount = 9;
  const commentsBlock = <HTMLDivElement>(
    document.querySelector(".commentsBlock")
  );
  const arrow = <HTMLImageElement | null>document.getElementById("arrow");
  const heart = <HTMLImageElement | null>document.getElementById("heart");
  const reply = <HTMLImageElement | null>document.querySelector(".reply");
  const textarea = <HTMLTextAreaElement | null>(
    document.getElementById("comment")
  );
  const warning = <HTMLDivElement | null>document.querySelector(".warning");
  const sendBtn = <HTMLButtonElement | null>document.querySelector(".send-btn");
  const comment = <HTMLTextAreaElement | null>(
    document.getElementById("comment")
  );
  const commentForm = <HTMLFormElement | null>(
    document.getElementById("commentForm")
  );
  const select = document.getElementById("comment-sort");
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

  if (arrow) {
    arrow.src = arrowImage;
  }
  if (heart) {
    heart.src = heartImage;
  }
  if (reply) {
    reply.src = replyImage;
  }

  commentForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    const newPublishedComment = document.createElement("div");

    const commentText = comment.value;
    if (commentText.trim() === "") return;
    
    comment.value = "";

    newPublishedComment.innerHTML = `
    <div class="publishedComment">
            <img class="userAvatar" alt="Аватар пользователя" />

            <div class="userNameAndFormWrapper">

                <div class="userNameWrapper">
                  <span class="userName"></span>
          
                  <div class="date">${getFormattedDate()}</div>
                </div>

                <div class="publishedCommentText">${commentText}</div>
            </div>

            <div class="actionButtons">
              <button class="reply">Ответить</button>
            </div>

          </div>
    `;

    commentsBlock.appendChild(newPublishedComment);

    const publishedCommentText = <HTMLElement | null>(
      document.querySelector(".publishedCommentText")
    );


  });

  textarea.addEventListener("input", function () {
    const messageLength = textarea.value.length;

    if (messageLength >= 1000) {
      sendBtn.disabled = true;
      warning.style.display = "block";
    } else {
      warning.style.display = "none";
      sendBtn.disabled = false;
    }
  });

  const toggleArrowRotation = () => arrow.classList.toggle("select-rotated");

  select.addEventListener("mousedown", toggleArrowRotation);
  select.addEventListener("mouseup", toggleArrowRotation);

  for (let i = 0; i < contentMockCount; i++) {
    const subcontent = document.createElement("div");
    subcontent.classList.add("contentMockElement");
    if (i === contentMockCount - 1) {
      subcontent.classList.add("span");
    }
    contentMock.appendChild(subcontent);
  }
});

async function randomUserData(): Promise<void> {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const userAvatarImage = data.results[0].picture.large;

    const userAvatar =
      document.querySelectorAll<HTMLImageElement>(".userAvatar");

    userAvatar.forEach((avatar) => {
      if (avatar) {
        avatar.src = userAvatarImage;
      }
    });

    const userLogin = data.results[0].login.username;
    const userName = document.querySelectorAll<HTMLSpanElement>(".userName");

    userName.forEach((uName) => {
      if (uName) {
        uName.textContent = userLogin;
      }
    });
  } catch (error) {
    console.error("Ошибка при получении данных", error);
    return null;
  }
}

randomUserData();
