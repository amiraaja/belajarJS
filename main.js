// console.log("Hello World!")
// alert("nontifikasi")
// prompt("pinjem duit dong")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding is Fun"
// console.log(Promnet)

// let Promnet = "Coding is hard"
// console.log(Promnet)
// Promnet = "Coding not easy"
// console.log(Promnet)

// const Promnet = "Coding is hard"
// console.log(Promnet)
// Promnet = "Coding is easy"
// console.log(Promnet) //ini error

// let totalPoin = prompt("Masukkan poin anda")
//     if(totalPoin > 100){
//         document.write("<h1>Congratulation</h1>");
//     } 
//     else{
//         document.write("<h2>OK THX</h2>");
//     }

// CHALLENGE
// const x = 6;
// const y = 3;

// if (x < 10 && y > 1) {
//   console.log('a: true');
// } else {
//   console.log('a: false');
// }

// if (x < 10 && y < 1) {
//   console.log('b: true');
// } else {
//   console.log('b: false');
// }

// if (x == 5 || y == 5) {
//   console.log('c: true');
// } else {
//   console.log('c: false');
// }

// if (x == 6 || y == 5) {
//   console.log('d: true');
// } else {
//   console.log('d: false');
// }

// if (!(x == y)) {
//   console.log('e: true');
// } else {
//   console.log('e: false');
// }



// let x = 6;
// let y = 3;

// console.log(x<10 && y > 1);
// console.log(x<10 && y < 1);
// console.log(x==5||y==5);
// console.log(x==6||y==5);
// console.log(!(x==y));

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })


// let taskList = document.getElementById("taskList")
// let addTaskButton = document.getElementById("addTaskButton")
// let taskInput = document.getElementById("taskInput")

// addTaskButton.addEventListener('click', function(){
//     let taskText = taskInput.value
//     console.log(taskText)
//     taskList.innerHTML = taskText
// })

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed', this.checked);
        });

        const label = document.createElement('label');
        label.innerText = taskText;

        const deleteBtn = document.createElement('button');  // Changed to button element
        deleteBtn.innerText = 'X';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteBtn);  // Append the delete button
        taskList.appendChild(li);

        taskInput.value = '';
    }
}