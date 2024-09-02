const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    }
  },
  {
    threshold: 0.5,
  }
);

observer.observe(document.querySelector(".btn1"));
observer.observe(document.querySelector(".btn2"));
