'use strict';

const userInput = document.querySelector('.input-task');
const addBtn = document.querySelector('#add-btn');
const result = document.querySelector('.todo-list');

addBtn.addEventListener('click', function(){
    const task = userInput.value.trim();
    console.log(task);
        if(task === ''){
            alert('Please enter a valid task!')
            return; 
        }
    const li = document.createElement('li');
    li.textContent = task;

    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = 'Delete';
    li.appendChild(delBtn);
    console.log(delBtn);

    li.addEventListener('click', function(){
    li.classList.toggle('completed');
    console.log(li.classList);
    });

    delBtn.addEventListener('click', function(){
        li.remove();    
    })

    result.appendChild(li);
    userInput.value = '';
})

