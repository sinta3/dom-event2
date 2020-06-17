let submit = document.getElementById("submit");

function input() {
    let todo = document.getElementById("todo").value;
    let container = document.getElementById("container");

    let content = document.createElement("div");
    content.setAttribute("class", "content");

    let create = document.createElement("h3");
    let createB = document.createElement("button");
    let createC = document.createElement("button");

    container.appendChild(content);
    content.appendChild(create);
    content.appendChild(createB);
    content.appendChild(createC);

    createB.innerHTML = "Edit";
    createC.innerHTML = "Delete";
    create.innerHTML = ` ${todo}`;
}

submit.addEventListener("click", input);
