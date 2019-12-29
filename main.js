/* Toggle between adding and removing the "responsive" class to top-nav when the user clicks on the icon */
function navCollapse() {
  var x = document.getElementById("topNavMenu");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
} 