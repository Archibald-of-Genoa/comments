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
      const subcontent = document.createElement("div") as HTMLDivElement | null;
      subcontent.classList.add("contentMockElement");
      if (i === mockCount - 1) {
        subcontent.classList.add("span");
      }
      contentMock.appendChild(subcontent);
    }
  }

  commentsFilter(): void {
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

  newCommentForm(): HTMLDivElement | null {
    const wrapper: HTMLDivElement | null = document.querySelector(".wrapper");
    const warning: HTMLDivElement | null = document.querySelector(".warning");
    const sendBtn: HTMLButtonElement | null =
      document.querySelector(".send-btn");
    const commentForm = document.getElementById(
      "commentForm"
    ) as HTMLFormElement | null;
    const textarea = document.getElementById(
      "comment"
    ) as HTMLTextAreaElement | null;

    const commentsBlock: HTMLDivElement = document.createElement("div");
    commentsBlock.classList.add("commentsBlock");
    commentsBlock.innerHTML = /*html*/ `

    <div class="newCommentBlock">
      <img class="userAvatar" alt="Аватар пользователя" />
      <div div class="userNameAndFormWrapper">
        <div class="userNameWrapper">
          <span class="userName"></span>

          <div class="warning">Макс. 1000 символов</div>
        </div>

        <form id="commentForm" action="submit">
          <label for="comment"></label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            maxlength="1000"
            placeholder="Введите текст сообщения"
            required
          ></textarea>

          <button type="submit" class="send-btn btn">Отправить</button>
        </form>
      </div>
    </div>
  
    `;
    wrapper.appendChild(commentsBlock);

    // textarea.addEventListener("input", function () {
    //   const messageLength = textarea.value.length;

    //   if (messageLength >= 10) {
    //     sendBtn.disabled = true;
    //     warning.style.display = "block";
    //   } else {
    //     warning.style.display = "none";
    //     sendBtn.disabled = false;
    //   }
    // });

    

    return commentsBlock;
  }
}

export default Layout;
