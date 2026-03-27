function showForLoop() {
    let output = document.getElementById("output");
    output.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.innerText = "For Loop: " + i;
        output.appendChild(li);
    }
}

function showWhileLoop() {
    let output = document.getElementById("output");
    output.innerHTML = "";

    let i = 1;
    while (i <= 5) {
        let li = document.createElement("li");
        li.innerText = "While Loop: " + i;
        output.appendChild(li);
        i++;
    }
}