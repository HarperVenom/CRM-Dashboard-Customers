const menuButton = document.getElementById("menu-button");
const overlay = document.querySelector(".overlay");

[menuButton, overlay].forEach((element) => {
  element.addEventListener("click", () => {
    const menu = document.querySelector(".dashboard-menu");
    if (menu.classList.contains("opened")) {
      menu.classList.remove("opened");
      overlay.classList.remove("active");
    } else {
      if (element === overlay) return;
      menu.classList.add("opened");
      overlay.classList.add("active");
    }
  });
});
