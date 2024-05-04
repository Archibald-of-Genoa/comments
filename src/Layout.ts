import arrowImage from "@/assets/Arrow.svg";
import heartImage from "@/assets/heart.svg";
import replyImage from "@/assets/reply.svg";



class Layout {
  private mockCount: number;

  constructor(mockCount: number) {
    this.mockCount = mockCount;
    this.init();
  }

  private init() {
    this.addContentMock(this.mockCount);
    this.commentsFilter();
    this.newCommentForm();
  }

  private addContentMock(mockCount: number | null): void {
    const contentMock: HTMLDivElement = document.querySelector(".contentMock");
    for (let i = 0; i < mockCount; i++) {
      const subcontent = <HTMLDivElement | null>document.createElement("div");
      subcontent.classList.add("contentMockElement");
      if (i === mockCount - 1) {
        subcontent.classList.add("span");
      }
      contentMock.appendChild(subcontent);
    }
  }

  private commentsFilter(): void {
    const arrow = document.getElementById("arrow") as HTMLImageElement | null;
    const heart = document.getElementById("heart") as HTMLImageElement | null;
    const reply = document.querySelector(".reply") as HTMLImageElement | null;
    const select = document.getElementById("comment-sort") as HTMLSelectElement;

    if (arrow) {
      arrow.src = arrowImage;

      const toggleArrowRotation = () => {
        arrow.classList.toggle("select-rotated");
      };

      select.addEventListener("click", toggleArrowRotation);
      select.addEventListener("mouseup", toggleArrowRotation);
    }
    if (heart) {
      heart.src = heartImage;
    }
    if (reply) {
      reply.src = replyImage;
    }
  }

  private newCommentForm(): HTMLDivElement | null {
    const commentsBlock: HTMLDivElement = document.createElement("div");
    commentsBlock.classList.add("commentsBlock");
    const textarea = document.getElementById(
      "comment"
    ) as HTMLTextAreaElement | null;
    const warning: HTMLDivElement | null = document.querySelector(".warning");
    const sendBtn: HTMLButtonElement | null =
      document.querySelector(".send-btn");
    const commentForm = document.getElementById(
      "commentForm"
    ) as HTMLFormElement | null;

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
}

export default Layout;
