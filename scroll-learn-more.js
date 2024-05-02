const scrollEvent = () => {
  const main = document.querySelector("#container");
  const section1 = document.querySelector("#learn-more");
  const section2 = document.querySelector("#learn-more-2");

  const h0 = document.querySelector("#h0");
  const h1 = document.querySelector("#h1");

  // Check the scroll position
  // Get the scroll position within the container
  let scrollPosition = main.scrollTop;

  // Get the height of the section
  const section1Height = section1.getBoundingClientRect().height;
  const section2Height =
    section1Height + section2.getBoundingClientRect().height;

  // Determine if the user has scrolled past a certain point in the first section
  if (scrollPosition > section1Height / 2) {
    header.classList.remove("transparent");
    header.classList.add("solid-background");
  } else {
    header.classList.remove("solid-background");
    header.classList.add("transparent");
  }
};

const main = document.querySelector("#container");
main.addEventListener("scroll", scrollEvent);

window.onload = function () {
  h0.classList.remove("setUnderlineOnCurrentPage");
  h1.classList.add("setUnderlineOnCurrentPage");
};
