/* LISTADO INICIAL + BOT. INCREASE/DECREASE */
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

/* AGREGA INPUT A LISTADO INICIAL */
function listElements()
{
    let list = document.getElementById("list");  
    data.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <p>${item.name}</p>
        <input type="button" value="-" class="decrCant" onclick="decrCantNew(${index})">
        <input type="number" min="1" max="999" value="1" class="val" disabled>
        <input type="button" value="+" class="incrCant" onclick="incrCantNew(${index})">
        <button type="submit" id="btnAdd" onclick="output(list)">Add to list</button>            
    `;
    list.appendChild(li);
    });
}

/* INCREASE/DECREASE DE LOS ELEMENTOS */
listElements();
function incrCantNew(item)
{
    var inputsNumber = document.querySelectorAll("input[type=number]");
    inputsNumber[item].value = inputsNumber[item].value * 1 + 1; 
}
function decrCantNew(item)
{
    var inputsNumber = document.querySelectorAll("input[type=number]");
    if(inputsNumber[item].value > 0)
    {
        inputsNumber[item].value = inputsNumber[item].value - 1; 
    }
}

/* AGREGA INPUT A LISTADO DE CANT. ITEMS */
function listado(list){
    var text = "";
    var inputs = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    var li = document.createElement("li");
    /* var node = document.createTextNode(text); */
    var inputsNumber = document.querySelectorAll("input[type=number]");
    var newItem = inputsNumber.length;
    li.innerHTML = `
        <p>${text}</p>
        <input type="button" value="-" class="decrCantNew" onclick="decrCantNew(${newItem})">
        <input type="number" min="1" max="999" value="1" class="val" disabled>
        <input type="button" value="+" class="incrCantNew" onclick="incrCantNew(${newItem})">
        <button type="submit" id="btAdd" class="bt">Add to list</button>
    `;
    /* li.appendChild(node); */
    document.getElementById("list").appendChild(li);
    data.push( {name:text} );
    alert("Se agregó elemento " + text);    
}