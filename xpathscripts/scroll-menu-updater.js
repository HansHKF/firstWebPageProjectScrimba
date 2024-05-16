const scrollEvent = () => {
  const main = document.querySelector("#container");
  const section1 = document.querySelector("#hero");
  const section2 = document.querySelector("#alnes");
  const section3 = document.querySelector("#trollstigen");
  const section4 = document.querySelector("#about");
  const section5 = document.querySelector("#contact");

  const h0 = document.querySelector("#h0");
  const h1 = document.querySelector("#h1");
  const h2 = document.querySelector("#h2");
  const h3 = document.querySelector("#h3");
  const h4 = document.querySelector("#h4");
  const h5 = document.querySelector("#h5");

  // Check the scroll position
  // Get the scroll position within the container
  let scrollPosition = main.scrollTop;

  // Get the height of the section
  const section1Height = section1.getBoundingClientRect().height;
  const section2Height =
    section1Height + section2.getBoundingClientRect().height;
  const section3Height =
    section2Height + section3.getBoundingClientRect().height;
  const section4Height =
    section3Height + section4.getBoundingClientRect().height;
  const section5Height =
    section4Height + section5.getBoundingClientRect().height;

  // Determine if the user has scrolled past a certain point in the first section
  if (scrollPosition > section1Height / 2) {
    header.classList.remove("transparent");
    header.classList.add("solid-background");
  } else {
    header.classList.remove("solid-background");
    header.classList.add("transparent");
  }

  //Adds (underline) indicator to the header menu, when scrolling.
  if (scrollPosition < section1Height / 2) {
    h0.classList.add("setUnderlineOnCurrentPage");
  } else {
    h0.classList.remove("setUnderlineOnCurrentPage");
  }

  //Adds (underline) indicator to the header menu, when scrolling.
  if (scrollPosition > section2Height / 3 && scrollPosition < section2Height) {
    h1.classList.add("setUnderlineOnCurrentPage");
  } else if (
    scrollPosition > section3Height / 3 &&
    scrollPosition < section3Height
  ) {
    h1.classList.add("setUnderlineOnCurrentPage");
  } else {
    h1.classList.remove("setUnderlineOnCurrentPage");
  }

  //Adds (underline) indicator to the header menu, when scrolling.
  if (
    scrollPosition > section4Height / 1.5 &&
    scrollPosition < section4Height
  ) {
    h2.classList.add("setUnderlineOnCurrentPage");
  } else {
    h2.classList.remove("setUnderlineOnCurrentPage");
  }
};

const main = document.querySelector("#container");
main.addEventListener("scroll", scrollEvent);

window.onload = function () {
  // Trigger the scrollEvent when the page loads
  scrollEvent();
};
