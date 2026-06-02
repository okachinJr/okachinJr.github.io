const toast = document.querySelector(".toast");
let toastTimer;

document.querySelectorAll("[data-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    clearTimeout(toastTimer);
    toast.textContent = `${button.dataset.contact} LINK: COMING SOON`;
    toast.classList.add("is-visible");
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  });
});
