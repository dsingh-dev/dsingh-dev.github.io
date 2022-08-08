var preScroll = window.pageYOffset;
window.onscroll = function () {
  var updateScroll = window.pageYOffset;
  if (preScroll > updateScroll) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-48px";
  }
  preScroll = updateScroll;
};

function clibtn() {
  document.getElementById("skills").classList.add("active");
  document.getElementById("about").classList.remove("active");
  window.location.href = "#sk-se"; //button is clicked and redirect to section
}
function clibtn2() {
  document.getElementById("about").classList.add("active");
  document.getElementById("skills").classList.remove("active");
  window.location.href = "#ab-se";
}
