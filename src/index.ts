import "./styles/reset.css";
import "./styles/style.scss";
import arrowImage from "@/assets/Arrow.svg";
import heartImage from "@/assets/heart.svg";

document.addEventListener("DOMContentLoaded", function () {
  const contentMock = document.querySelector(".contentMock");
  const contentMockCount = 9;
  const arrow = <HTMLImageElement>document.getElementById("arrow");
  const heart = <HTMLImageElement>document.getElementById("heart");
  const textarea = <HTMLTextAreaElement>document.getElementById("comment");
  const warning = <HTMLDivElement>document.querySelector(".warning");
  const sendBtn = <HTMLButtonElement>document.querySelector(".send-btn");
  const comment = <HTMLTextAreaElement>document.getElementById("comment");
  const commentForm = <HTMLFormElement>document.getElementById("commentForm");
  const select = document.getElementById("comment-sort");

  commentForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    const commentText = comment.value;
    if (commentText.trim() === "") return;

    const newComment = <HTMLDivElement>document.createElement("div");
  });

  textarea.addEventListener("input", function () {
    const messageLength = textarea.value.length;

    if (messageLength >= 10) {
      sendBtn.disabled = true;
      warning.style.display = "block";
    } else {
      warning.style.display = "none";
      sendBtn.disabled = false;
    }
  });

  if (arrow) {
    arrow.src = arrowImage;
  }
  if (heart) {
    heart.src = heartImage;
  }

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
    const userAvatar = document.getElementById(
      "userAvatar"
    ) as HTMLImageElement;
    if (userAvatar) {
      userAvatar.src = userAvatarImage;
    }
    const userLogin = data.results[0].login.username;
    const userName = document.getElementById("userName") as HTMLSpanElement;
    if (userName) {
      userName.textContent = userLogin;
    }
  } catch (error) {
    console.error("Ошибка при получении данных", error);
    return null;
  }
}

randomUserData();
