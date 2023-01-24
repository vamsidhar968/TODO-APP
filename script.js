let taskname1 = document.getElementById("taskname")
let date1 = document.getElementById("dateofc")
let description1 = document.getElementById("descriptionn")
let elem1 = document.getElementById("mainpopup");

function popupitem(){

   elem1.classList.add("main1")

}
let alg1 = document.getElementById("alg")
let span1 = document.createElement("span")

function addTask(){
    if(taskname1.value === ""){
        span1.innerHTML = "Task name cannot be empty"
        alg1.appendChild(span1)
        span1.className = "error1"
    }else{
    let maindiv = document.getElementById("scr")
    maindiv.innerHTML += `<div id="edd" class="items">
    <h3 id="taskhead">${taskname1.value}</h3>
    <p id="datehead">${date1.value}</p>
    <p id="deschead">${description1.value}</p>

    <button class="edi" id="edb" onclick="edititems(this)" >edit</button>
    <button class="del" id="delt" onclick="deleteitems(this)">dele</button>`

    resettask();
    span1.remove();
     
    }

}

function resettask(){
    taskname1.value = ""
    date1.value = ""
    description1.value = ""


}

function closeTask(){
    let mainpop = document.getElementById("mainpopup")
    mainpop.classList.remove("main1")
    resettask()
2
}

function edititems(e){
 let elem1 = document.getElementById("mainpopup");
 elem1.classList.add("main1")
 let selectedtask = e.parentElement
 console.log(selectedtask.children)
 taskname1.value = selectedtask.children[0].textContent
 date1.value = selectedtask.children[1].textContent
 description1.value = selectedtask.children[2].textContent
 e.parentElement.remove();
}

console.log(document.getElementById("taskhead").textContent)
console.log(document.getElementById("datehead").textContent)
console.log(document.getElementById("deschead").textContent)

function deleteitems(e) {
    e.parentElement.remove();
}