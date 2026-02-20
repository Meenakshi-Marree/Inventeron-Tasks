let step = 1;
let captchaValue = "";

function createCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  captchaValue = "";
  for (let i = 0; i < 4; i++) {
    captchaValue += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captcha").innerText = captchaValue;
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (step === 1) {
    document.getElementById("step2").style.display = "block";
    createCaptcha();
    step = 2;
  } else {
    const userInput = document.getElementById("captchaInput").value.toUpperCase();

    if (userInput === captchaValue) {
      alert("Submitted successfully");
    } else {
      alert("Invalid captcha");
      createCaptcha();
    }
  }
});
