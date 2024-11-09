document.addEventListener("DOMContentLoaded", function () {
  const openBtn6 = document.getElementById("openBtn6");
  const openBtn7 = document.getElementById("openBtn7");
  const openBtn8 = document.getElementById("openBtn8");
  const closeBtn2 = document.getElementById("closeBtn2");
  const modal = document.getElementById("modalPackage");

  function openCheck(modal) {
    if (modal.hasAttribute("open")) {
      console.log("Modal open");
    } else {
      console.log("Modal closed");
    }
  }

  function openModal() {
    modal.showModal();
    openCheck(modal);
  }

  function closeModal() {
    if (modal.hasAttribute("open")) {
      modal.close();
      openCheck(modal);
    }
  }

  openBtn6.addEventListener("click", openModal);
  openBtn7.addEventListener("click", openModal);
  openBtn8.addEventListener("click", openModal);
  closeBtn2.addEventListener("click", closeModal);

  // Закрытие модального окна при нажатии клавиши Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.hasAttribute("open")) {
      closeModal();
    }
  });
});
