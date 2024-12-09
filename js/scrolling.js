document.addEventListener("scroll", () => {
  const banner = document.getElementById("header-banner");
  if (window.scrollY > 50) {
    banner.classList.add("bg-opacity-70");
  } else {
    banner.classList.remove("bg-opacity-70");
  }
});
