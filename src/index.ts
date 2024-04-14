import "./styles/reset.css";
import "./styles/style.scss";
import arrowImage from "@/assets/Arrow.svg";

document.addEventListener("DOMContentLoaded", function () {
  const contentMock = document.querySelector(".contentMock");
  const contentMockCount = 9;
  const arrow = document.getElementById("arrow") as HTMLImageElement;

  if (arrow) {
    arrow.src = arrowImage;
  }

  const toggleArrowRotation = () => arrow.classList.toggle("select-rotated");

  const select = document.getElementById("comment-sort");
  select.addEventListener("mousedown", toggleArrowRotation);
  select.addEventListener("mouseup", toggleArrowRotation);

  for (let i = 0; i < contentMockCount; i++) {
    const subcontent = document.createElement("div");
    subcontent.classList.add("contentMockElement");
    if (i === contentMockCount - 1) {
      subcontent.classList.add("span");
    }
    contentMock.appendChild(subcontent);
  }
});
