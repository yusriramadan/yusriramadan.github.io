const navigasiBar = document.querySelector("#navigasi-bar");
const navigasiRight = document.querySelector("#navigasi-right");
const closeIcon = document.querySelectorAll("#close-icon");
const perceptionTodo = document.querySelector("#perception");
const todoDetailPerception = document.querySelector("#todo-detail-perception");
const tiktokTodo = document.querySelector("#tiktok");
const todoDetailTikTok = document.querySelector("#todo-detail-tiktok");
const instagramTodo = document.querySelector("#instagram");
const todoDetailInstagram = document.querySelector("#todo-detail-instagram");

window.addEventListener("click", menuHide);
window.addEventListener("click", TodoHide);

// Navigasi
navigasiBar.onclick = (e) => {
  e.preventDefault();

  navigasiRight.classList.toggle("active");
  navigasiBar.classList.toggle("active");
};

function menuHide(e) {
  if (!navigasiBar.contains(e.target) && !navigasiRight.contains(e.target)) {
    navigasiRight.classList.remove("active");
  }
}

// Todo Function
window.onclick = (e) => {
  if (e.target === todoDetailPerception) {
    todoDetailPerception.classList.remove("active");
  }

  if (e.target === todoDetailTikTok) {
    todoDetailTikTok.classList.remove("active");
  }

  if (e.target === todoDetailInstagram) {
    todoDetailInstagram.classList.remove("active");
  }
};

function TodoHide(e) {
  closeIcon.forEach((i) => {
    if (i.contains(e.target)) {
      e.preventDefault();
      todoDetailPerception.classList.remove("active");
      todoDetailTikTok.classList.remove("active");
      todoDetailInstagram.classList.remove("active");
    }
  });
}

perceptionTodo.onclick = (e) => {
  e.preventDefault();

  todoDetailPerception.classList.toggle("active");
};

tiktokTodo.onclick = (e) => {
  e.preventDefault();

  todoDetailTikTok.classList.toggle("active");
};

instagramTodo.onclick = (e) => {
  e.preventDefault();

  todoDetailInstagram.classList.toggle("active");
};
