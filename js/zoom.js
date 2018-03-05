// var img = document.getElementsByTagName("img"),
img = document.getElementById("banner-img");
banner_text =  document.querySelector(".banner-text"),
zoomable_content = document.getElementById( "zoomable-content"),
zoomable_image = document.getElementById("zoomable-image");

img.onclick = function() {
  zoomable_image.classList.remove("animation-close");
  zoomable_content.style.display = "block";
  zoomable_image.src = this.src;
  banner_text.classList.toggle('hidden');
  zoomable_image.classList.toggle("animation-open");
}

function hideModal() {
  zoomable_image.classList.toggle("animation-open");
  zoomable_image.classList.toggle("animation-close");
  setTimeout(function() {
    zoomable_content.style.display = "none";
    },600)
  banner_text.classList.toggle('hidden');
}

zoomable_image.addEventListener("click", function() {
  hideModal();
});

window.addEventListener("wheel", function() {
  setTimeout(function() {
    hideModal();
    },600)

});
