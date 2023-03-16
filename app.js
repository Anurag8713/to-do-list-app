const input = document.querySelector("#text")
const list = document.querySelector("#list")

input.addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        todolist(this.value)
        this.value = ""
    }
})

const todolist = (input) => {
    const newlist = document.createElement("li")
    newlist.innerHTML = `
     ${input}
     <i class="fa fa-times"></i>
    `;
    list.appendChild(newlist)

    newlist.addEventListener(
        "click",
        function() {
            this.classList.toggle("done")
        }
    )

    newlist.querySelector("i").addEventListener(
        "click",
        function() {
            newlist.remove()
        }
    )





}

