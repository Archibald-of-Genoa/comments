export function newCommentForm(): HTMLDivElement | null {
  const commentsBlock = <HTMLDivElement>document.createElement("div");
  commentsBlock.classList.add(".commentsBlock");
  const textarea = <HTMLTextAreaElement | null>(
    document.getElementById("comment")
  );
  const warning = <HTMLDivElement | null>document.querySelector(".warning");
  const sendBtn = <HTMLButtonElement | null>document.querySelector(".send-btn");
  const commentForm = <HTMLFormElement | null>(
    document.getElementById("commentForm")
  );

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

  commentForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    const newPublishedComment = document.createElement("div");

    const commentText = textarea.value;
    if (commentText.trim() === "") return;

    textarea.value = "";
  });

  return commentsBlock;
}
