// Button log out
document.querySelector(".logout-link").addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
    window.location.href = "login.html";
  }
});

// SideBar
const sideBar = document.querySelector(".sidebar");
const header = document.querySelector(".header");

header.addEventListener("click", function () {
  sideBar.classList.toggle("Mo");
});
