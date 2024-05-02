function toggleMenuVisibility() {
  var toggler = document.querySelector(".toggler");
  if (window.matchMedia("(max-width: 1000px)").matches) {
    if (toggler) {
      toggler.checked = !toggler.checked;
    }
  }
}
