import "./styles/reset.css";
import "./styles/style.scss";

import Layout from "./Layout";
import UIManager from "./UIManager";
import LoadUserData from "./LoadUserData";

export const wrapper: HTMLDivElement | null =
  document.querySelector(".wrapper");
export const warning: HTMLDivElement | null =
  document.querySelector(".warning");
export const sendBtn: HTMLButtonElement | null =
  document.querySelector(".send-btn");
export const commentForm = document.getElementById(
  "commentForm"
) as HTMLFormElement | null;
export const textarea = document.getElementById(
  "comment"
) as HTMLTextAreaElement | null;

new Layout(9);

document.addEventListener("DOMContentLoaded", function () {
  const fetchData = new LoadUserData();

  fetchData.load("https://randomuser.me/api/").then(() => {
    const userdata = fetchData.getData();
    if (userdata) {
      const update = new UIManager();
      update.updateAvatar(userdata.avatar);
      update.updateUserName(userdata.userName);
    } else {
      console.error("Не удалось загрузить данные пользователя");
    }
  });

    textarea.addEventListener("input", function () {
      console.log(textarea.value);
      //   const messageLength = textarea.value.length;
      //   sendBtn.disabled = true;
      //   warning.style.display = "block";
      //   if (messageLength >= 10) {
      //     sendBtn.disabled = true;
      //     warning.style.display = "block";
      //   } else {
      //     warning.style.display = "none";
      //     sendBtn.disabled = false;
      //   }
    });
});
