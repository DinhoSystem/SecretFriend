// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
let listName=[];

function AddFriend(){
    if(document.getElementById("friend").value == ""){
        alert("Debes ingresar un nombre");
        return;
    }else{
    let name = document.getElementById("friend").value;
    listName.push(name);
    Clear();
    AddList();
    console.log(listName);
    }
}
function AddList(){
    let listFriend = document.getElementById("listFriend");
    listFriend.innerHTML = ``;
    for(let i = 0; i<listName.length; i++){
        listFriend.innerHTML += `<li>${listName[i]}</li>`;
    }
}


function Clear(){
    document.getElementById("friend").value = "";
}

function SortearFriend(){
    if(listName.length < 2){
        alert("Debes ingresar al menos 2 amigos");
    }else{
    let freindWinner = Math.floor(Math.random()*listName.length);
    let winner = document.getElementById("resultado");
    winner.innerHTML = `<li>${listName[freindWinner]}</li>`;
    ClearList();
}
}

function ClearList(){
    listName = [];
    AddList();
}