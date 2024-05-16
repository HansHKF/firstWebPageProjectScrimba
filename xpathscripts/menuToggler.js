//Allows for the closing of the mobile menu on menu item interaction.
function toggleMenuVisibility() {
  //looks for the class "toggler" and flips it's state when menu item is pressed 
  // e.g: if enable then disable it (close menu)
  var toggler = document.querySelector(".toggler");
  if (window.matchMedia("(max-width: 1000px)").matches) {
    if (toggler) {
      toggler.checked = !toggler.checked;
    }
  }
}

  
