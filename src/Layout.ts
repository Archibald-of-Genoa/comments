import arrowImage from "@/assets/Arrow.svg";
import heartImage from "@/assets/heart.svg";
import replyImage from "@/assets/reply.svg";
import { wrapper } from ".";

class Layout {
  private mockCount: number;

  constructor(mockCount: number) {
    this.mockCount = mockCount;
    this.init();
  }

  private init() {
    this.addContentMock(this.mockCount);
    this.commentsFilter();
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

      select.addEventListener("mousedown", toggleArrowRotation);
      select.addEventListener("mouseup", toggleArrowRotation);
    }
    if (heart) {
      heart.src = heartImage;
    }
    if (reply) {
      reply.src = replyImage;
    }
  }



}

export default Layout;
