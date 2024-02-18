var tasks = [];
const fut=document.querySelector(".fut")
fut.style.display='none'

function yeniTaskYarat (text  ) {
    const task={
        text,
        completed:false

    }
    tasks.push(task)
     goster(tasks)
}


function completeActivate (index) {
    const task=tasks[index]
    if(task){
        task.completed=!task.completed
    }
  goster(tasks)
}

function removeTask (index) {
tasks.splice(index,1);
goster(tasks)
}

function clearCompleted () {
tasks=tasks.filter(task=>!task.completed)
goster(tasks)
}

function hamisiGoster () {
goster(tasks)
}

function aktivleriGoster () {
    const aktiv=tasks.filter(task=>!task.completed)
    goster(aktiv)

}

function bitmishleriGoster () {
    const bitmis=tasks.filter(task=>task.completed)
    goster(bitmis)
}

function goster (t) {
    const tasksDiv= document.querySelector('.tasks')
    tasksDiv.innerHTML=""
   for (let i in t){
    const task=t[i]
    const radio=document.createElement('button')
     radio.id="radio"
    const div=document.createElement('div');
    const remove=document.createElement('button')
   remove.id="remove"
     
    remove.innerHTML='x'
    remove.addEventListener('click',function(){
        removeTask(i)
    })
   
    div.innerHTML=task.text;
    div.id="divv"
    if(task.completed){
        div.style.textDecoration="line-through"
        radio.innerHTML="✓"
    }  
    radio.addEventListener('click',function(){
        completeActivate(i)
        
    })

    div.append(radio)
    div.append(remove)
    tasksDiv.append(div)
    // tasksDiv.append(fut)
    

}
}

document.querySelector('.add'). addEventListener('click',function(){
   const taskInp= document.querySelector('.task')
   if(!taskInp.value.trim()){
    alert("Please write your todos")
   
   }
   else{
    yeniTaskYarat(taskInp.value)
    taskInp.value=''
    fut.style.display='flex'
   }    
   
})
window.addEventListener("keyup",function(e){
   
    const taskInp= document.querySelector('.task')
    
    if(e.key === "Enter" && taskInp.value.trim()){
        yeniTaskYarat(taskInp.value)
    taskInp.value=''
    fut.style.display='flex'
    }
    else if(e.key === "Enter" &&!taskInp.value.trim()){
        alert("Please write your todos")
           
    }
 
})
// function doldur(){
//     for (var i=0;i<10;i++){
//         yeniTaskYarat(`tapsh${i}`)
//     }
// }
document.querySelector('.all').addEventListener('click',hamisiGoster)

document.querySelector('.completed').addEventListener('click',bitmishleriGoster)
document.querySelector('.active').addEventListener('click',aktivleriGoster)
document.querySelector('.clear').addEventListener('click',clearCompleted)