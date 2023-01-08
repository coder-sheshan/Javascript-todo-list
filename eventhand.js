    

    //Global Variables-----1
const addButton = document.getElementById("addBtn");
const inputBox = document.getElementById("inputBox");
const taskContainer = document.getElementById('taskContainer');
const taskArr = [];
const stateArr=[];


    //event function
function addTaskContain(){
    //toggle is used for only on off on off on off
    this.classList.toggle("completed");
    console.log(this.innerText);
}
    //double click function
function handleRemover(){
    this.remove();
}


    //function for web storage to set
function taskStore(){
     localStorage.setItem("tasks", JSON.stringify(taskArr));
}    

    //function for web storage to get
function getTasks(){
    let tasks = localStorage.getItem("tasks");
    if (!tasks){
        return;
    }
    //this is used for if you refresh the app page your task won't delete
    tasks = JSON.parse(tasks);
    for(index in tasks){
        createTask(tasks[index].value);
    }
}    

getTasks();



    //function for create task
function createTask(userInput){
        //creating new element with value
        const newElement = document.createElement("div");
        newElement.innerText = userInput;
    
        //call style function
        newElement.setAttribute("class", "task");
        /* applyStyle(newElement); */
    
       //append to container
        taskContainer.append(newElement);
    
        //adding event listener
        newElement.addEventListener('click', addTaskContain);
        //double click to done task
        newElement.addEventListener('dblclick', handleRemover)
}  
    

    //this is a main function for whole task application
function addTask() {
    //taking user input
    const userInput = inputBox.value;


    let taskObj ={};
    taskObj.value = userInput;
    taskObj.isCompleted = false;


    //It is used for only view userinput not style view without typing in text box
    if(userInput.length === 0)return alert("please enter some tasks...")
        
    //put the user value to userInput
    taskArr.push(taskObj);

   //Save the user tasks in localwebstorage
   taskStore();

    //whole task in one function
   createTask(userInput);

}


function handleEnter(e){
    if (e.keyCode === 13) addTask();
}



    //Add event listeners
addButton.addEventListener("click", addTask);
inputBox.addEventListener("keyup", handleEnter);




//storage

/* const object = {
    firstName:"sheshanraj",
    lastName:"v",
    aGe: 34,
};

sessionStorage.setItem("firstName","sheshanraj")
sessionStorage.setItem("lastName","v") */

    //style function
/* function applyStyle(change){
    change.style.margin="0 auto";
    change.style.padding="20px";
    change.style.fontSize="30px";
    change.style.textAlign="center";
    change.style.border="2px solid green";
    change.style.cursor="pointer";
    change.style.width="750px";
} */

