const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    }
  },
  {
    rootMargin: "50px 50px 50px 50px",
  }
);

observer.observe(document.querySelector(".btn1"));
observer.observe(document.querySelector(".btn2"));
