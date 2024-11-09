import "./style.css";
/* main.js */
let currentPage = 1;
const totalPages = 3; // Adjust this based on the number of pages

document.getElementById("prevButton").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
});

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
});

function updatePage() {
  document.querySelectorAll(".page").forEach((page, index) => {
    page.style.display = index + 1 === currentPage ? "block" : "none";
  });

  document.getElementById("prevButton").style.display =
    currentPage === 1 ? "none" : "inline-block";
  document.getElementById("nextButton").style.display =
    currentPage === totalPages ? "none" : "inline-block";
}

// Initialize
updatePage();
import { openBook } from "./bookAnimations";

openBook();
