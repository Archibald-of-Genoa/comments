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
const loadUserData = new LoadUserData();
const uimanager = new UIManager();

document.addEventListener("DOMContentLoaded", function () {
  loadUserData.fetchData();

  commentForm.addEventListener("submit", function (e: Event) {
    e.preventDefault();

    if(textarea) {
      const getData = loadUserData.getData();
      if(getData) {
        const comment = new Comment(getData, textarea.value);
        const commentService = new CommentService();
        commentService.addComment(comment);
        uimanager.addCommentUI(comment);
        loadUserData.fetchData();

        console.log(comment);
      }
    }
  })
  
});
