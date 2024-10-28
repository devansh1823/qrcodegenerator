const wrapper = document.querySelector(".wrapper"),
  generateBtn = wrapper.querySelector(".form button"),
  qrInput = wrapper.querySelector(".form input"),
  qrImg = wrapper.querySelector(".qrCode img");

generateBtn.addEventListener("click", () => {
  let qrVal = qrInput.value;
  if (!qrVal) return;
  generateBtn.innerText = "Generating your QR Code....."
  qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrVal}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});
