function showLoader() {
    let loader = document.getElementById("loader");
    let message = document.getElementById("message");

    loader.style.display = "block";
    message.innerText = "";

    // simulate API delay
    setTimeout(() => {
        loader.style.display = "none";
        message.innerText = "Data Loaded Successfully!";
    }, 3000);
}