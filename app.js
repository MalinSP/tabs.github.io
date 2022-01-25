const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  // console.log(id);
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");

      content.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      console.log(element);
      element.classList.add("active");
    });
  }
});
