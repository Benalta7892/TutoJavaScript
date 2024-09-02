const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { transform: "translateX(-50px)", opacity: 0 },
          { transform: "translateX(0)", opacity: 1 },
        ],
        {
          duration: 300,
        }
      );
    }
  }
});

observer.observe(document.querySelector(".btn1"));
observer.observe(document.querySelector(".btn2"));
