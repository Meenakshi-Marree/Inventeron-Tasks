function login() {
    try {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "" || password === "") {
            throw "All fields are required!";
        }

        if (password.length < 6) {
            throw "Password must be at least 6 characters!";
        }

        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Login successful!";

    } catch (error) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = error;
    }
}