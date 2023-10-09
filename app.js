var input_data = document.getElementById('input');
var add_data = document.getElementById('button');
var list_data = document.getElementById('todolist');

var data = [];

add_data.addEventListener('click', add);

function add(){
    data.push(input_data.value);
    console.log(data);
    input_data.value = '';
    toshowdata();
}

function toshowdata() {
    list_data.innerHTML = '';
    data.forEach(function(item, index){
        list_data.innerHTML += `<li>${item} <a onclick="edititem()">Edit</a> <a onclick="deleteitem(${index})">X</a></li>`;
    })
}

function deleteitem(i){
    data.splice(i, 1);
    toshowdata();
}

function edititem(index){
    var new_item = prompt("Enter the new task Joker!!!");
    data.splice(index, 1, new_item);
    toshowdata();
}