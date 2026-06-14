const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  if (!toast) {
    return;
  }

  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

document.querySelectorAll("[data-link-slot]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") !== "#") {
      return;
    }

    event.preventDefault();
    showToast(`${link.dataset.linkSlot} LINK: COMING SOON`);
  });
});
