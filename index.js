let numLimitInput = document.querySelector(".numLimit");
let ageLimitInput = document.querySelector(".ageLimit");
let getBtn = document.querySelector("button");
let body = document.querySelector("body");

getBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let numLimit = Number(numLimitInput.value);
    let ageLimit = Number(ageLimitInput.value);

    fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
        let users = data.users;

        let filteredUsers = users.filter((user) => user.age >= ageLimit);

        for (let i = 0; i < numLimit; i++) {
            let fUser = filteredUsers[i];

            let box = document.createElement("div");
            let name = document.createElement("h2");
            let list = document.createElement("ul");
            let age = document.createElement("li");
            let phone = document.createElement("li");
            let email = document.createElement("li");
            let address = document.createElement("li");

            box.classList.add("container");
            box.classList.add("user");

            name.textContent = fUser.firstName;
            age.textContent = fUser.age;
            phone.textContent = fUser.phone;
            email.textContent = fUser.email;
            address.textContent = fUser.address.address

            box.appendChild(name);
            box.appendChild(age);
            box.appendChild(phone);
            box.appendChild(email);
            box.appendChild(address);

            body.appendChild(box);
        }
    });
});
