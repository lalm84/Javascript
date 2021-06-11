let data =
[ 
    {
    name:"Mustang"    
    },
    {
    name:"ChevySS"
    },
    {
    name:"Polara"
    },
    {
    name:"Charger"
    },
    {
    name:"Shelby Cobra"
    }    
];
let list = document.getElementById("list");  
data.forEach((item) => {
let li = document.createElement("li");
li.innerText = item.name;
list.appendChild(li);
});

function listado(list){
    var text = "";
    var inputs = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    var li = document.createElement("li");
    var node = document.createTextNode(text);
    li.appendChild(node);
    document.getElementById("list").appendChild(li);
    data.push( {name:text} );
    alert("Se agregó elemento " + text);
    /* let boton = document.getElementById("btnAdd")
    boton.addEventListener("click", onClick)
    function onClick(){
    data.push( {name:text} );
    alert("Se agregó " + text + " a la lista");
    } */
}

