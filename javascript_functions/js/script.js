// simple function
function greet() {
    document.getElementById("output").innerText = "Hello Meenakshi!";
}

// function with parameters
function add(a, b) {
    return a + b;
}

// function call from button
function addNumbers() {
    let result = add(5, 3);
    document.getElementById("output").innerText = "Sum: " + result;
}