function validateForm() {
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let contact = document.getElementById("contact").value;
    let gender = document.getElementById("gender").value;

    if (fname === "" || email === "" || password === "" || repassword === "" || contact === "" || gender === "") {
        alert("Please fill all required fields");
        return false;
    }

    if (password !== repassword) {
        alert("Passwords do not match");
        return false;
    }

    if (contact.length !== 10 || isNaN(contact)) {
        alert("Enter valid 10-digit contact number");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
