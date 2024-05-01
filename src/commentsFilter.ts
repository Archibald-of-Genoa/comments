import arrowImage from "@/assets/Arrow.svg";
import heartImage from "@/assets/heart.svg";
import replyImage from "@/assets/reply.svg";

export function commentsFilter(): void {
  const arrow = <HTMLImageElement | null>document.getElementById("arrow");
  const heart = <HTMLImageElement | null>document.getElementById("heart");
  const reply = <HTMLImageElement | null>document.querySelector(".reply");
  const select = document.getElementById("comment-sort");

  if (arrow) {
    arrow.src = arrowImage;
  }
  if (heart) {
    heart.src = heartImage;
  }
  if (reply) {
    reply.src = replyImage;
  }

  const toggleArrowRotation = () => arrow.classList.toggle("select-rotated");

  select.addEventListener("mousedown", toggleArrowRotation);
  select.addEventListener("mouseup", toggleArrowRotation);
}
