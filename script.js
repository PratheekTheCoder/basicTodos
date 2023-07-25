const item = document.querySelector("#item");
const todoBox = document.querySelector("#todo-box");

item.addEventListener("keypress", function(e){
      if (e.key === "Enter"){
        addTodos(this.value);
        this.value = "";
      }
});

const addTodos = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item}
    <i class="fas fa-times"></i>`;  

    listItem.addEventListener("click", function(){
        this.classList.toggle("done");
    });
    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    });
    todoBox.appendChild(listItem);
}