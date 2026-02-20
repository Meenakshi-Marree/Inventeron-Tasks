let firstSubmit = true;
let captcha = "";

const form = document.getElementById("myForm");
const captchaBox = document.getElementById("captchaBox");
const captchaText = document.getElementById("captchaText");
const captchaInput = document.getElementById("captchaInput");
const thirdInput = document.getElementById("thirdInput");

function generateCaptcha() {
    captcha = Math.floor(1000 + Math.random() * 9000).toString();
    captchaText.textContent = captcha;
}

form.addEventListener("submit", function (e) {
    e.preventDefault(); // no page reload

    if (firstSubmit) {
        generateCaptcha();
        captchaBox.classList.remove("hidden");
        thirdInput.classList.remove("hidden");
        firstSubmit = false;
    } else {
        if (captchaInput.value === captcha) {
            alert("Submitted successfully");
        } else {
            alert("Invalid captcha");
        }
    }
});
