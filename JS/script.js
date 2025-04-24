document.addEventListener("DOMContentLoaded", () => {
    const footerSocial = document.getElementById("footerSocial");
  
    window.addEventListener("scroll", () => {
      const rect = footerSocial.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
  
      if (isVisible) {
        footerSocial.classList.add("show");
      } else {
        footerSocial.classList.remove("show");
      }
    });
  });
