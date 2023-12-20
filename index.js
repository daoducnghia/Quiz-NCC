function openNav() {
  document.getElementById("menu-item").classList.remove("hidden");
}

function closeNav() {
  document.getElementById("menu-item").classList.add("hidden");
  document.getElementById("button-nav").classList.remove("hidden");
}

var w = window.innerWidth;
if (w > 480) {
  document.getElementById("button-nav").classList.add("hidden");
  document.getElementById("menu-item").classList.remove("hidden");
  document.getElementById("item-close").classList.add("hidden");
}
