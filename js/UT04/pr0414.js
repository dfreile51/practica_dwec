let products = [
  {
    id: '1000',
    product: 'Fresas de Huelva',
    price: 410,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
  },
  {
    id: '1001',
    product: 'Kiwi amarillo',
    price: 245,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
  },
  {
    id: '1002',
    product: 'Manzana roja',
    price: 195,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
  },
  {
    id: '1003',
    product: 'Manzana verde',
    price: 170,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
  },
  {
    id: '1004',
    product: 'Melón',
    price: 135,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
  },
  {
    id: '1005',
    product: 'Naranja valenciana',
    price: 160,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
  },
  {
    id: '1006',
    product: 'Pera conferencia',
    price: 210,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
  },
  {
    id: '1007',
    product: 'Plátano',
    price: 260,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
  },
  {
    id: '1008',
    product: 'Sandía',
    price: 115,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
  },
  {
    id: '1009',
    product: 'Uva',
    price: 195,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
  },
  {
    id: '1010',
    product: 'Aguacate',
    price: 415,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
  },
  {
    id: '1011',
    product: 'Cereza del Bierzo',
    price: 520,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
  },
  {
    id: '1012',
    product: 'Granada',
    price: 310,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
  },
  {
    id: '1013',
    product: 'Limón',
    price: 155,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
  },
  {
    id: '1014',
    product: 'Nectarina',
    price: 180,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
  },
  {
    id: '1015',
    product: 'Piña',
    price: 320,
    image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
  },
  
]

function crearUnProducto( {id, product, price, image} ) {
  let divProducto = document.createElement('div');
  divProducto.classList.add('product');

  let img = document.createElement('img');
  img.setAttribute('src', image);
  img.classList.add('product-foto');
  divProducto.append(img);

  let data = document.createElement('div');
  data.classList.add('product-data');
  data.innerHTML = `
      <div class="fruit-name">${ product }</div>
      <div class="price-btn">
          <div class="price">${ (price/100).toFixed(2) } €/Kg</div>
          <div class="btn btn-add-product" data-id="${id}">Añadir</div>
      </div>
  `;
  divProducto.append(data);

  return divProducto;
}

function renderPagina() {
  let productNodes = products.map( crearUnProducto );

  let divProductos = document.getElementById('products-section');
  divProductos.innerHTML = '';
  divProductos.append(...productNodes);
}

renderPagina();


/* let divProductos = document.getElementById('products-section');

products.forEach(item => {
  let producto = document.createElement('div');
  producto.classList.add('product');
  producto.innerHTML = `
        <img class="product-foto" src="${item['image']}" alt="image" />
  `;
  divProductos.append(producto);

  let data = document.createElement('div');
  data.classList.add('product-data');
  data.innerHTML = `
      <div class="fruit-name">${ item['product'] }</div>
      <div class="price-btn">
            <div class="price">${(item['price']/100).toFixed(2)} €/Kg</div>
            <div class="btn btn-add-product" data-id="${item['id']}">Añadir</div>
      </div>
  `;
  producto.append(data);
}); */