/* LISTADO INICIAL */
const dataBase = [
    {
        id: 1,
        nombre: 'Kit destornillad.',
        precio: 1000,
        imagen: 'img/destornilladores.jpg'
    },
    {
        id: 2,
        nombre: 'Tester de red',
        precio: 10000,
        imagen: 'img/testerred.jpg'
    },
    {
        id: 3,
        nombre: 'Alicate',
        precio: 10000,
        imagen: 'img/alicate.jpg'
    },
    {
        id: 4,
        nombre: 'Pinza de punta',
        precio: 10000,
        imagen: 'img/pinzapunta.jpg'
    },
    {
        id: 5,
        nombre: 'Crimpeadora',
        precio: 10000,
        imagen: 'img/crimpeadora.jpg'
    },
    {
        id: 6,
        nombre: 'Pelacables',
        precio: 10000,
        imagen: 'img/pelacables.jpg'
    },
    {
        id: 7,
        nombre: 'Bolsa RJ45',
        precio: 10000,
        imagen: 'img/rj45.jpg'
    },
    {
        id: 8,
        nombre: 'Precintos',
        precio: 10000,
        imagen: 'img/precintos.jpg'
    },
    {
        id: 9,
        nombre: 'Cable cat5 (x10mt)',
        precio: 10000,
        imagen: 'img/cablered.jpg'
    },
    {
        id: 10,
        nombre: 'Pinza',
        precio: 10000,
        imagen: 'img/pinza.jpg'
    },
    {
        id: 11,
        nombre: 'Cutter',
        precio: 10000,
        imagen: 'img/cutter2.jpg'
    },
    {
        id: 12,
        nombre: 'Ponchadora',
        precio: 10000,
        imagen: 'img/ponchadora.jpg'
    },
    {
        id: 13,
        nombre: 'Tester',
        precio: 10000,
        imagen: 'img/tester.jpg'
    },
    {
        id: 14,
        nombre: 'Buscapolo',
        precio: 10000,
        imagen: 'img/buscapolo.jpg'
    },
    {
        id: 15,
        nombre: 'Grampas',
        precio: 10000,
        imagen: 'img/grampas.jpg'
    },
    {
        id: 16,
        nombre: '"Viru viru"',
        precio: 10000,
        imagen: 'img/viru.jpg'
    },
];

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMflushButton = document.querySelector('#boton-vaciar');

/* FUNCIONES */

/* FILTRO CHECKBOX DE CATEGORÍAS */
function change() {
    var caTool = document.querySelectorAll(".filTools input[type='checkbox']");    
    var filters = {
      models: getClassOfCheckedCheckboxes(caTool),      
    };
  
    filterResults(filters);
  }
function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];  
    if (checkboxes && checkboxes.length > 0) {
      for (var i = 0; i < checkboxes.length; i++) {
        var cb = checkboxes[i];
  
        if (cb.checked) {
          classes.push(cb.getAttribute("rel"));
        }
      }
    }
  
    return classes;
  }
  
  function filterResults(filters) {
    var rElems = document.querySelectorAll(".result div");
    var hiddenElems = [];
  
    if (!rElems || rElems.length <= 0) {
      return;
    }
  
    for (var i = 0; i < rElems.length; i++) {
      var el = rElems[i];  
      if (filters.caTool.length > 0) {
        var isHidden = true;  
        for (var j = 0; j < filters.models.length; j++) {
          var filter = filters.models[j];  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
        }  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }      
    }
  
    for (var i = 0; i < rElems.length; i++) {
      rElems[i].style.display = "block";
    }  
    if (hiddenElems.length <= 0) {
      return;
    }  
    for (var i = 0; i < hiddenElems.length; i++) {
      hiddenElems[i].style.display = "none";
    }
  }

/* Diseño prod en DB */
function renderProducts() {
    dataBase.forEach((info) => {
        /* Estructura */
        const node = document.createElement('div');
        node.classList.add('card', 'col-sm-3', 'p-0', 'text-center');
        /* Body */
        const nodeCardBody = document.createElement('div');
        nodeCardBody.classList.add('card-body', 'adjust', 'col');
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
        nodeBoton.textContent = '+';
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

/* DIBUJA ITEMS EN EL CARRITO */
function renderCart() {    
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
        node.classList.add('list-group-item', 'text-right', 'mx-1');
        node.textContent = `${numeroUnidadesItem} x ${targetItem[0].nombre} - ${targetItem[0].precio} AR$`;
        const selButton = document.createElement('button');
        selButton.classList.add('btn', 'btn-danger', 'mx-4');
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

/* ENVIAR LISTADO POR MAIL */
function addMailIframe() {
    $('<iframe src="mailto:email@testdomain.com?">')
       .appendTo('#myIframe')
       .css("display", "none");
  }
  function addMailIframeSrcdoc() {
    //var body = "<a href='mailto:email@testdomain.com?'>Contact us</a>";
    var body   = "";
    var script = "<scr" + "ipt>" + "window.top.location = 'mailto:email@testdomain.com?';" + "</scr" + "ipt>";
    $(`<iframe srcdoc="` + script + body + `">`)
       .appendTo('#myIframeSrcdoc')
       .css("display", "none")
       ;
  }

/* FILTRAR ITEMS POR NOMBRE */
function myFunction() {
    /*  DECLARA LA VARIABLE */
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("XXXXXXXXXXXXXXXXXXX");
    li = ul.getElementsByTagName('li');
    /* ACÁ BUSCA EN TODA LA LISTA, OCULTA LOS QUE NO MATCHÉEN CRITERIO */    
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }