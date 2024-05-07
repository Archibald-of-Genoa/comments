import "./styles/reset.css";
import "./styles/style.scss";

import Layout from "./Layout";
import UIManager from "./UIManager";
import LoadUserData from "./LoadUserData";

new Layout(9);

const fetchData = new LoadUserData();
fetchData.load("https://randomuser.me/api/").then(() => {
  const userdata = fetchData.getData();
  if (userdata) {
    const update = new UIManager();
    update.updateAvatar(userdata.avatar);
    update.updateUserName(userdata.userName);
  } else {
    console.error("Не удалось загрузить данные пользователя");
  }
});






document.addEventListener("submit", function (event: Event) {
  event.preventDefault();
});
