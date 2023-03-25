const navigationHeight = document.querySelector(".menu")
  .offsetHeight;

// console.log(navigationHeight);
// console.log(document.documentElement);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);