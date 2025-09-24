document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    document
      .querySelectorAll(".tab, .tab-panel")
      .forEach((el) => el.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
}) ;

const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.querySelector(".menu-toggle img");
  const isOpen = menu.style.display === "flex";

  menu.style.display = isOpen ? "none" : "flex";
  icon.src = isOpen ? "./images/icon-hamburger.svg" : "./images/icon-close.svg";
}
