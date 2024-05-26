import "./styles/reset.css";
import "./styles/style.scss";
import heartFilled from "@/assets/heartFilled.svg";
import heartHollow from "@/assets/heartHollow.svg";

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

const replyToInput = document.getElementById("replyTo") as HTMLInputElement;
const replyToId = replyToInput.value;

new Layout(9);
const loadUserData = new LoadUserData();
const uimanager = new UIManager();
const commentService = new CommentService();
const getData = loadUserData.getData();

document.addEventListener("DOMContentLoaded", function () {
  loadUserData.fetchData();

  commentForm.addEventListener("submit", function (e: Event) {
    e.preventDefault();

    if (replyToId && textarea) {
      if (getData) {
        const comment = new Comment(getData, textarea.value);
        commentService.addComment(comment);
        uimanager.addCommentUI(comment, true);
        loadUserData.fetchData();
      }
    } else {
      if (getData) {
        const comment = new Comment(getData, textarea.value);
        commentService.addComment(comment);
        uimanager.addCommentUI(comment);

        loadUserData.fetchData();
      }
    }
  });

  commentsBlock.addEventListener("click", function (e: Event) {
    const target = e.target as HTMLElement;

    if (target.classList.contains("toFavorite")) {
      const commentId = target.getAttribute("data-comment-id");
      if (commentId) {
        const updatedComment = commentService.toggleFavorite(commentId);
        if (updatedComment) {
          target.textContent = updatedComment.isFavorite
            ? "В избранном"
            : "В избранное";
          target.style.backgroundImage = updatedComment.isFavorite
            ? `url(${heartFilled})`
            : `url(${heartHollow})`;
          console.log(updatedComment.isFavorite);
        }
      }
    }

    if (target.classList.contains("increaseRating")) {
      const ratingControl = target.closest(".ratingControl");
      if (ratingControl) {
        const ratingCount = ratingControl.querySelector(".ratingCount");
        if (ratingCount) {
          const commentId = ratingControl
            .closest(".publishedComment")
            ?.querySelector(".toFavorite")
            ?.getAttribute("data-comment-id");

          if (commentId) {
            commentService.updateRating(commentId, true);
            ratingCount.textContent = (
              parseInt(ratingCount.textContent) + 1
            ).toString();
          }
        }
      }
    }
    if (target.classList.contains("decreaseRating")) {
      const ratingControl = target.closest(".ratingControl");
      if (ratingControl) {
        const ratingCount = ratingControl.querySelector(".ratingCount");
        if (ratingCount) {
          const commentId = ratingControl
            .closest(".publishedComment")
            ?.querySelector(".toFavorite")
            ?.getAttribute("data-comment-id");

          if (commentId) {
            commentService.updateRating(commentId, false);
            ratingCount.textContent = (
              parseInt(ratingCount.textContent) - 1
            ).toString();
          }
        }
      }
    }

    if (target.classList.contains("reply")) {
      const comment = new Comment(getData, textarea.value);
      textarea.focus();
    }
  });
});
