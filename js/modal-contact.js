document.addEventListener("DOMContentLoaded", function () {
  const openBtn1 = document.getElementById("openBtn1");
  const openBtn2 = document.getElementById("openBtn2");
  const openBtn3 = document.getElementById("openBtn3");
  const openBtn4 = document.getElementById("openBtn4");
  const openBtn5 = document.getElementById("openBtn5");
  const closeBtn1 = document.getElementById("closeBtn1");
  const modal = document.getElementById("modalContact");

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

  openBtn1.addEventListener("click", openModal);
  openBtn2.addEventListener("click", openModal);
  openBtn3.addEventListener("click", openModal);
  openBtn4.addEventListener("click", openModal);
  openBtn5.addEventListener("click", openModal);
  closeBtn1.addEventListener("click", closeModal);

  // Закрытие модального окна при нажатии клавиши Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.hasAttribute("open")) {
      closeModal();
    }
  });
});
