var img = document.getElementsByTagName("img");
var text = document.getElementById("text");

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseover", function() {
    var alt = this.alt;
    text.textContent = alt;
  });
}