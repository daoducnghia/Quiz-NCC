function openNav() {
  document.getElementById("menu-item").classList.remove("hidden");
}

function closeNav() {
  document.getElementById("menu-item").classList.add("hidden");
  document.getElementById("button-nav").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  function handleWindowSize() {
    var w = window.innerWidth;

    var buttonNav = document.getElementById("button-nav");
    var menuItem = document.getElementById("menu-item");
    var itemClose = document.getElementById("item-close");

    if (w > 540) {
      buttonNav.classList.add("hidden");
      menuItem.classList.remove("hidden");
      itemClose.classList.add("hidden");
    } else {
      buttonNav.classList.remove("hidden");
      menuItem.classList.add("hidden");
      itemClose.classList.remove("hidden");
    }
  }

  handleWindowSize();

  window.addEventListener("resize", function () {
    handleWindowSize();
  });
});
