function openPhoto(imageSrc) {
  const modal = document.getElementById("photoModal");
  const img = document.getElementById("modalImage");

  img.src = imageSrc;
  modal.style.display = "flex";
}

function closePhoto() {
  document.getElementById("photoModal").style.display = "none";
}
