let comunidades = {
    "Castilla y León": {
        "León": ["Villagatón", "Ponferrada", "León"],
        "Burgos": ["Burgos", "Cardeñadijo", "Frías"],
        "Valladolid": ["Valladolid", "Laguna de Duero", "Montealegre de Campos"],
        "Palencia": ["Palencia", "Brañosera", "Castrillo de Don Juan"],
        "Zamora": ["Zamora", "Cobreros", "Cubillos"],
        "Ávila": ["Ávila", "Casas del Puerto", "Donvidas"],
        "Soria": ["Soria", "Arancón", "Cañamaque"],
        "Segovia": ["Segovia", "Añe", "Cantalejo"],
        "Salamanca": ["Salamanca", "Beleña", "Alberca"]
    },
    "Galicia": {
        "Coruña": ["Coruña", "Dumbría", "Narón"],
        "Vigo": ["Vigo"],
        "Pontevedra": ["Pontevedra", "Moaña", "Pazos de Borbén"],
        "Ourense": ["Carballiño", "Cortegada", "Lobeira"]
    },
    "Comunidad Valenciana": {
        "Castellón": ["Benafer", "Ayódar", "Catí"],
        "Valencia": ["Alcàsser", "Benicolet", "Dos Aguas"],
        "Alicante": ["Almudaina", "Benidorm", "Cocentaina"]
    },
};

let selectComu = document.querySelector("#comunidad");
let selectProvin = document.querySelector("#provincia");
let selectLocalidad = document.querySelector("#localidad");

selectComu.addEventListener('change', cambiarProvincia);
selectProvin.addEventListener('change', cambiarLocalidad);


añadirComunidades();

function añadirComunidades() {
    Object.keys(comunidades).forEach(item => {
        selectComu.innerHTML += `<option>${item}</option>`;
    });
}

function cambiarProvincia() {
    selectProvin.innerHTML = '<option>Seleccione una provincia...</option>';
    
    if(selectComu.value != '') {
        Object.keys(comunidades[selectComu.value]).forEach(i => {
            selectProvin.innerHTML += `<option>${i}</option>`;
        });
    }
}

function cambiarLocalidad() {
    selectLocalidad.innerHTML = '<option>Seleccione una localidad...</option>';

    comunidades[selectComu.value][selectProvin.value].forEach(item => {
        selectLocalidad.innerHTML += `<option>${item}</option>`;
    });
}