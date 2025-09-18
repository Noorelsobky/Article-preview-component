document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#share-btn");
    const appBar = document.querySelector("#app-bar");
  
    button.addEventListener("click", () => {
      appBar.classList.toggle("active");
    });
  });
  