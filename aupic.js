function openNav() {
  document.getElementById("myTopnav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myTopnav").style.width = "0%";
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = myTopnav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    myTopnav.classList.add("sticky")
  } else {
    myTopnav.classList.remove("sticky");
  }
}