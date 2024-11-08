export function openBook() {
  document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("#main");
    const rightCover = document.querySelector(".cover-left");

    setTimeout(() => {
      main.classList.add("opened");
      rightCover.classList.add("open");
    }, 1000);

    // setTimeout(() => {
    //   introPage.classList.add("visible"); // Make intro page appear
    // }, 5500); // Adjust timing to sync with cover

    // setTimeout(() => {
    //   introPage.classList.add("turn"); // Rotate intro page
    //   leftPage.classList.add("slide-in"); // Slide in left page
    // }, 5500);
  });
}

// export function turnPage() {
//   document.addEventListener("DOMContentLoaded", () => {
//     const main = document.querySelector("#main");
//     const rightCover = document.querySelector(".cover-left");

//     setTimeout(() => {
//       main.classList.add("turned");
//       rightCover.classList.add("turn");
//     }, 1000);
//   });
// }
