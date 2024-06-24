// Система работает следующим образом: При загрузке страницы инициализируется
// запрос на ручку сервера, указанного в техзадании. Имитируется авторизация под
// разными пользователями, как для создания новых комментариев, так и для ответа
// на существующие комментарии. В последнем случае, при клике на кнопку
// Ответить, курсор перемещается обратно в строку ввода, автор ответа на
// комментарий как бы опять меняется, и на этот раз добавляется именно ответ на
// комментарий, а не создание нового комментария.

// Также, при выполнении этой работы, я попутно осваивал сборщик webpack,
// экспериментировал с различными лоадерами, типизацией самого сборщика и
// режимами разработки (dev и prod). Чтобы запустить проект, в терминале нужно
// ввести npm start

// В проекте используются библиотеки uuid (для создания уникальных
// идентификаторов) и flatted (для правильной сериализации цикличных ссылок при
// добавлении в localStorage).

// Для удобной работы со стилями используется препроцессор Sass. 

// Проект построен на принципе модульности, все импорты и экспорты должны
// работать нормально.

// Основной и окончательный релиз находится на  ветке master. Несколько других
// веток оставлены с целью обозначить умение работать с ветками и гитом, в
// целом.



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

export const wrapper: HTMLDivElement | null = document.querySelector(".wrapper");
export const warning: HTMLDivElement | null = document.querySelector(".warning");
export const sendBtn: HTMLButtonElement | null = document.querySelector(".send-btn");
export const textarea = document.getElementById("comment") as HTMLTextAreaElement | null;

export const commentsBlock: HTMLDivElement = document.querySelector(".commentsBlock");
export const publishedCommentBlock: HTMLDivElement =
  document.querySelector(".publishedCommentBlock");
export const commentForm = document.getElementById("commentForm") as HTMLFormElement | null;
const replyToInput = document.getElementById("replyTo") as HTMLInputElement;
export let replyToId = replyToInput.value;
export let publishedCommentID: string = null;

new Layout(9);
const loadUserData = new LoadUserData();
const uimanager = new UIManager();
const commentService = new CommentService();

document.addEventListener("DOMContentLoaded", function () {
  loadUserData.fetchData();

  function submitCommentForm() {
    replyToId = replyToInput.value;

    if (replyToId) {
      const getData = loadUserData.getData();
      if (getData) {
        const comment = new Comment(getData, textarea.value);
        comment.isReply = true;
        comment.addReply(comment);
        commentService.addComment(comment);
        loadUserData.fetchData();
        uimanager.addReplyUI(comment);
        replyToInput.value = "";

      }
    } else {
      const getData = loadUserData.getData();
      if (getData) {
        const comment = new Comment(getData, textarea.value);
        commentService.addComment(comment);
        loadUserData.fetchData();
        uimanager.addCommentUI(comment);
        replyToInput.value = "";
      }
    }
  }

  commentForm.addEventListener("submit", function (e: Event) {
    e.preventDefault();
    submitCommentForm();
    
  });

  textarea.addEventListener("keydown", function (e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitCommentForm();
    }
  });

  commentsBlock.addEventListener("click", function (e: Event) {
    const target = e.target as HTMLElement;

    if (target.classList.contains("toFavorite")) {
      const commentId = target.getAttribute("data-comment-id");
      if (commentId) {
        const updatedComment = commentService.toggleFavorite(commentId);
        if (updatedComment) {
          target.textContent = updatedComment.isFavorite ? "В избранном" : "В избранное";
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
            .closest(".publishedComment, .repliedComment")
            ?.querySelector(".toFavorite")
            ?.getAttribute("data-comment-id");

          if (commentId) {
            commentService.updateRating(commentId, true);
            ratingCount.textContent = (parseInt(ratingCount.textContent) + 1).toString();
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
            .closest(".publishedComment, .repliedComment")
            ?.querySelector(".toFavorite")
            ?.getAttribute("data-comment-id");

          if (commentId) {
            commentService.updateRating(commentId, false);
            ratingCount.textContent = (parseInt(ratingCount.textContent) - 1).toString();
          }
        }
      }
    }

    if (target.classList.contains("reply")) {
      const actionButtonsContainer = target.closest(".actionButtons");
      const commentIdElement = actionButtonsContainer.querySelector("[data-comment-id]");
      const commentId = commentIdElement?.getAttribute("data-comment-id");
      replyToInput.value = commentId;
      publishedCommentID = commentId;
      textarea.focus();
    }
  });

  document.getElementById("comment-sort").addEventListener("change", function (e: Event) {
    const select = e.target as HTMLSelectElement;
    const sortValue = select.value;
    let sortedComments: Comment[] = [];
    switch (sortValue) {
      case "byDate":
        sortedComments = commentService.sortByDate();
        break;
      case "byRating":
        sortedComments = commentService.sortByRating();
        break;
      case "byAnswers":
        sortedComments = commentService.sortByAnswers();
    }
    uimanager.renderComments(sortedComments);
  });

  document.querySelector(".favorite").addEventListener("click", function () {
    const favoriteComments = commentService.getFavorites();
    uimanager.renderComments(favoriteComments);
  });

  // Вот так бы выглядело первоначальное состояние отображаемых комментариев, но
  // у меня всё завязано на инициализирующий запрос на сервер при загрузке
  // страницы и сопутствующие UI-функции.

  // const initialCommentsState = commentService.sortByDate();
  // uimanager.renderComments(initialCommentsState)
});
