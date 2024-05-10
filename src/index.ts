import "./styles/reset.css";
import "./styles/style.scss";

import Layout from "./Layout";
import UIManager from "./UIManager";
import LoadUserData from "./LoadUserData";
import User from "./User";
import Comment from "./Comment";
import CommentService from "./CommentService";

export const wrapper: HTMLDivElement | null =
  document.querySelector(".wrapper");
export const warning: HTMLDivElement | null =
  document.querySelector(".warning");
export const sendBtn: HTMLButtonElement | null =
  document.querySelector(".send-btn");
export const textarea = document.getElementById(
  "comment"
) as HTMLTextAreaElement | null;

export const commentsBlock: HTMLDivElement =
  document.querySelector(".commentsBlock");
export const commentForm = document.getElementById(
  "commentForm"
) as HTMLFormElement | null;

new Layout(9);

document.addEventListener("DOMContentLoaded", function () {
  const fetchData = new LoadUserData();

  fetchData.load("https://randomuser.me/api/").then(() => {
    const userdata = fetchData.getData();
    if (userdata) {
      const update = new UIManager();
      update.updateAvatar(userdata.avatar);
      update.updateUserName(userdata.userName);
      const user = new User(
        userdata.userId,
        userdata.userName,
        userdata.avatar
      );

      commentForm.addEventListener("submit", function (e: Event) {
        e.preventDefault();

        if (textarea) {
          const commentText = textarea.value;
          const newComment = new Comment(user, commentText);
          const addComment = new CommentService();
          addComment.addComment(newComment)
          console.log(newComment);
        }
      });
    }
  });
});
