/* LISTADO INICIAL + BOT. INCREASE/DECREASE */
const dataBase = [
    {
        id: 1,
        nombre: 'Mustang',
        precio: 10000,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/76/120px-Single.png'
    },
    {
        id: 2,
        nombre: 'ChevySS',
        precio: 10000,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/76/120px-Single.png'
    },
    {
        id: 3,
        nombre: 'Polara',
        precio: 10000,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/76/120px-Single.png'
    },
    {
        id: 4,
        nombre: 'Taunus',
        precio: 10000,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/76/120px-Single.png'
    },
    {
        id: 5,
        nombre: 'Cobra',
        precio: 10000,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/76/120px-Single.png'
    },
    {
        id: 6,
        nombre: 'Charger',
        precio: 10000,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/76/120px-Single.png'
    },
    {
        id: 7,
        nombre: 'Galloper',
        precio: 10000,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/76/120px-Single.png'
    }
];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMflushButton = document.querySelector('#boton-vaciar');

/* Functs */

/* Diseño prod en DB */
function renderProducts() {
    dataBase.forEach((info) => {
        /* Estructura */
        const node = document.createElement('div');
        node.classList.add('card', 'col-sm-4');
        /* Body */
        const nodeCardBody = document.createElement('div');
        nodeCardBody.classList.add('card-body');
        /* Titulo */
        const nodeTitle = document.createElement('h5');
        nodeTitle.classList.add('card-title');
        nodeTitle.textContent = info.nombre;
        /* Imagen */
        const nodeImg = document.createElement('img');
        nodeImg.classList.add('img-fluid');
        nodeImg.setAttribute('src', info.imagen);
        /* Precio */
        const nodePrice = document.createElement('p');
        nodePrice.classList.add('card-text');
        nodePrice.textContent = info.precio + ' AR$';
        /* Button */
        const nodeBoton = document.createElement('button');
        nodeBoton.classList.add('btn', 'btn-primary');
        nodeBoton.textContent = 'Agregar al carrito';
        nodeBoton.setAttribute('marcador', info.id);
        nodeBoton.addEventListener('click', addItemToCart);
        /* Insert */
        nodeCardBody.appendChild(nodeImg);
        nodeCardBody.appendChild(nodeTitle);
        nodeCardBody.appendChild(nodePrice);
        nodeCardBody.appendChild(nodeBoton);
        node.appendChild(nodeCardBody);
        DOMitems.appendChild(node);
    });
}

/* Añadir producto al carrito */
function addItemToCart(evento) {    
    carrito.push(evento.target.getAttribute('marcador'))
    calcTot();
    renderCart();
}

/* Dibuja todos los productos guardados en el carrito */
function renderCart() {
    /* Vaciar HTML */
    DOMcarrito.textContent = '';
    /* Remover duplicados */
    const removeDuped = [...new Set(carrito)];
    removeDuped.forEach((item) => {
        const targetItem = dataBase.filter((itemDb) => {
            return itemDb.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const node = document.createElement('li');
        node.classList.add('list-group-item', 'text-right', 'mx-2');
        node.textContent = `${numeroUnidadesItem} x ${targetItem[0].nombre} - ${targetItem[0].precio} AR$`;
        const selButton = document.createElement('button');
        selButton.classList.add('btn', 'btn-danger', 'mx-5');
        selButton.textContent = 'X';
        selButton.style.marginLeft = '1rem';
        selButton.dataset.item = item;
        selButton.addEventListener('click', deleteItem);
        node.appendChild(selButton);
        DOMcarrito.appendChild(node);
    });
}

/* Borrar elemento */
function deleteItem(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderCart();
    calcTot();
}
/* Agregar más de uno */
function calcTot() {
    total = 0;
    carrito.forEach((item) => {
        const targetItem = dataBase.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + targetItem[0].precio;
    });
    DOMtotal.textContent = total.toFixed(2);
}
/* Vaciar */
function emptyCart() {
    carrito = [];
    renderCart();
    calcTot();
}
/* Click */
DOMflushButton.addEventListener('click', emptyCart);

/* Init */
renderProducts();

/* IMPRIMIR LISTADO CARRITO */
function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}

/* AGREGA INPUT A LISTADO INICIAL */
    /* function listElements() {
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
    } */
    
    /* INCREASE/DECREASE DE LOS ELEMENTOS */
    /* listElements();
    function incrCantNew(item) {
        var inputsNumber = document.querySelectorAll("input[type=number]");
        inputsNumber[item].value = inputsNumber[item].value * 1 + 1;
    }
    function decrCantNew(item) {
        var inputsNumber = document.querySelectorAll("input[type=number]");
        if (inputsNumber[item].value > 0) {
            inputsNumber[item].value = inputsNumber[item].value - 1;
        }
    } */
    
    /* AGREGA INPUT A LISTADO DE CANT. ITEMS */
    /* function listado(list) {
        var text = "";
        var inputs = document.querySelectorAll("input[type=text]");
        for (var i = 0; i < inputs.length; i++) {
            text += inputs[i].value;
        }
        var li = document.createElement("li"); */
        /* var node = document.createTextNode(text); */
        /* var inputsNumber = document.querySelectorAll("input[type=number]");
        var newItem = inputsNumber.length;
        li.innerHTML = `
            <p>${text}</p>
            <input type="button" value="-" class="decrCantNew" onclick="decrCantNew(${newItem})">
            <input type="number" min="1" max="999" value="1" class="val" disabled>
            <input type="button" value="+" class="incrCantNew" onclick="incrCantNew(${newItem})">
            <button type="submit" id="btAdd" class="bt">Add to list</button>
        `; */
        /* li.appendChild(node); */
        /* document.getElementById("list").appendChild(li);
        data.push({ name: text });
        alert("Se agregó elemento " + text);
        }
    } */