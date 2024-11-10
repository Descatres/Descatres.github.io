import "./style.css";
let currentPage = 1;
const totalPages = document.querySelectorAll(".page").length;

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const previousPage = currentPage;
    if (event.target.id.includes("nextButton") && currentPage < totalPages) {
      currentPage++;
    } else if (event.target.id.includes("prevButton") && currentPage > 1) {
      currentPage--;
    }
    triggerPageAnimation(previousPage);
  });
});

function triggerPageAnimation(previousPageIndex) {
  const previousPage = document.querySelector(
    `.page:nth-child(${previousPageIndex})`
  );
  const currentPageElement = document.querySelector(
    `.page:nth-child(${currentPage})`
  );

  if (previousPageIndex < currentPage) {
    currentPageElement.style.opacity = "0";
    previousPage.style.zIndex = "1";
    previousPage.classList.add("flip");
    setTimeout(() => {
      currentPageElement.style.opacity = "1";
      previousPage.classList.remove("flip");
      updatePage();
    }, 100);
  }

  if (previousPageIndex > currentPage) {
    currentPageElement.style.opacity = "0";
    currentPageElement.style.zIndex = "1";
    previousPage.classList.add("flip-reverse");
    setTimeout(() => {
      currentPageElement.style.opacity = "1";
      previousPage.classList.remove("flip-reverse");
      updatePage();
    }, 100);
  }
}

function updatePage() {
  document.querySelectorAll(".page").forEach((page, index) => {
    page.style.display = index + 1 === currentPage ? "flex" : "none";
    page.style.opacity = index + 1 === currentPage ? "1" : "0";
  });

  document.querySelectorAll(".nav-button").forEach((button) => {
    button.style.display = "none";
    if (currentPage > 1 && button.id.includes("prevButton")) {
      button.style.display = "flex";
    }
    if (currentPage < totalPages && button.id.includes("nextButton")) {
      button.style.display = "flex";
    }
  });
}

updatePage();
