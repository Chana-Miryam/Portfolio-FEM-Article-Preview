/* This event listener refreshes the page when the browser is resized. 
Commented out to submit the project as a solution to Front End Mentor website. 

window.addEventListener('resize', function () { 
  "use strict";
  window.location.reload(); 
});

*/

var mq = window.matchMedia("(max-width: 729px)");
if (mq.matches) {
  function shareClicked() {
    document.getElementById("avatar-container").style.display = "none";
    document.getElementById("avatar-container-active").style.display = "grid"; // On click elem vanishes
  }

  function shareClicked2() {
    document.getElementById("avatar-container").style.display = "grid";
    document.getElementById("avatar-container-active").style.display = "none"; // On click elem vanishes
  }

} else {
  function shareClicked() {
    document.getElementById("avatar-container").style.display = "grid";
    document.getElementById("avatar-container-active").style.display = "grid"; // On click elem vanishes
  }

  function shareClicked2() {
    document.getElementById("avatar-container").style.display = "grid";
    document.getElementById("avatar-container-active").style.display = "none"; // On click elem vanishes
  }
}
