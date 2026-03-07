window.addEventListener("load", () => {
  const spinner = document.getElementById("spinner-container");
  const content = document.querySelectorAll(".spin");

  setTimeout(() => {
    spinner.classList.add("hidden");
    content.forEach((el) => {
      el.classList.remove("invisible");
    });
  }, 100);
});
