export function openBook() {
  document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("#main");
    const rightCover = document.querySelector(".cover-left");

    setTimeout(() => {
      main.classList.add("opened");
      rightCover.classList.add("open");
    }, 1000);
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
