document.getElementById("qrBtn").addEventListener("click", function () {
  const qrBox = document.getElementById("qrDisplay");

  // Replace this later with your GitHub Pages link
  const link = "https://your-website-link.com";

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    link
  )}`;

  qrBox.innerHTML = `<img src="${qrURL}" alt="QR Code" />`;
  qrBox.style.display = "block";
});
