function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw "Failed to fetch data!";
            }
            return response.json();
        })
        .then(data => {
            let userList = document.getElementById("userList");
            userList.innerHTML = "";

            data.forEach(user => {
                let li = document.createElement("li");
                li.innerText = user.name + " (" + user.email + ")";
                userList.appendChild(li);
            });
        })
        .catch(error => {
            let userList = document.getElementById("userList");
            userList.innerHTML = "<li style='color:red'>" + error + "</li>";
        });
}