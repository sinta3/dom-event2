let submit = document.getElementById("submit");
let container = document.getElementById("container");
let arr = [];

//add
function input() {
    container.innerHTML = null;
    arr.forEach((element, index) => {
        //buat div
        let content = document.createElement("div");
        content.setAttribute("class", "content");

        //tambah tombol dan content
        let create = document.createElement("h3");
        create.setAttribute("id", `${element}`);
        let createB = document.createElement("button");
        createB.setAttribute("id", `edit-${element}`);
        let createC = document.createElement("button");
        createC.setAttribute("id", `delete-${element}`);
        let createText = document.createTextNode(element);

        //gabung semua
        container.appendChild(content);
        content.appendChild(create);
        content.appendChild(createB);
        content.appendChild(createC);

        createB.innerHTML = "Edit";
        createC.innerHTML = "Delete";
        create.appendChild(createText);
        console.log(`${element}`);
        //edit
        createB.addEventListener("click", () => {
            editList(index);
        });
        //delete
        createC.addEventListener("click", () => {
            deleteList(index);
        });
    });
}

//edit
editList = (index) => {
    change = prompt("input change");
    arr.splice(index, 1, change);
    // console.log(arr);
    input();
};
//delete
deleteList = (index) => {
    arr.splice(index, 1);
    // console.log(arr);
    input();
};
//add
submit.addEventListener("click", () => {
    let todo = document.getElementById("todo").value;
    arr.push(todo);
    input();
});
