const scrollContainer = document.querySelector("#container");
// Select all elements with the class "scrollButton"
const scrollButtons = document.querySelectorAll(".scrollButton");

// Add event listener to each scroll button
scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Scroll to the next snap point vertically
    scrollContainer.scrollBy({
      top: window.innerHeight, // Scrolling by the height of the viewport
      behavior: "smooth", // To enable smooth scrolling
    });
  });
});