function w3_open() {
  document.getElementById("main").style.marginLeft = "7%";
  document.getElementById("mylogo").style.marginLeft = "10.7%";
  document.getElementById("Sidebar").style.width = "25%";
  document.getElementById("Sidebar").style.display = "block";
  document.getElementById("openNav").style.display = "none";
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("Sidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("mylogo").style.marginLeft = "0%";
}
