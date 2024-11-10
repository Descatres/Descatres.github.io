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

let touchStartX = 0;
let touchEndX = 0;
document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
});
document.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 50) {
    document.querySelector("#nextButton").click();
  }
  if (touchStartX - touchEndX < -50) {
    document.querySelector("#prevButton").click();
  }
});

document.getElementById("contact-link").addEventListener("click", function (e) {
  setTimeout(function () {
    window.open(
      "https://www.google.com/search?q=send me an email to joaomcatre@hotmail.com",
      "_blank"
    );
  }, 1000);
});

document.getElementById("fetchRepo").addEventListener("click", () => {
  const username = "descatres";
  const repoName = "Plants-and-Friends";
  const repoDetails = document.getElementById("repoDetails");

  repoDetails.innerHTML = "Loading...";

  fetch(`https://api.github.com/repos/${username}/${repoName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((repo) => {
      repoDetails.innerHTML = "";

      const repoItem = document.createElement("div");
      repoItem.classList.add("repo-item");
      repoItem.innerHTML = `
        <p>${repo.description || "No description available"}</p>
        <p><strong>Stars:</strong> ${repo.stargazers_count}</p>
        <p><strong>Forks:</strong> ${repo.forks_count}</p>
      `;
      repoDetails.appendChild(repoItem);
    })
    .catch((error) => {
      repoDetails.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
