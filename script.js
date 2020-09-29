window.addEventListener('resize', function () { 
  "use strict";
  window.location.reload(); 
});

var mq = window.matchMedia("(max-width: 800px)");
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
