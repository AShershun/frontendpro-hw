'use strict'

const categoriesList = document.querySelector('#categories_list');
const productsList = document.querySelector('#products_list');
const infoBlock = document.querySelector('#product_info');

const marketData = {
    'Smartphones': [{
        name: 'Google Pixel 8 Pro',
        info: '256 GB, RAM 12 GB'
    }, {
        name: 'Apple iPhone 15 Pro',
        info: '256 GB, RAM 8 GB'
    }, {
        name: 'Samsung S24 Ultra',
        info: '512 GB, RAM 12 GB'
    }, {
        name: 'Nothing Phone 2',
        info: '128 GB, RAM 8 GB'
    }],
    'Laptops' : [{
        name: 'Lenovo Legion Pro 7',
        info: 'Core i9; 13900HX; 32 GB; RTX 4080; SSD M.2 1024 GB'
    }, {
        name: 'Asus ROG Strix G16',
        info: 'Core i7 13650HX; 32 GB; RTX 4060; SSD M.2 512 GB'
    }, {
        name: 'HP Pavilion Plus 14',
        info: 'Core i5 13500H; 16 GB; Iris Xe Graphics G7 80EUs; SSD M.2 1024 GB'
    }, {
        name: 'Apple MacBook Pro 16',
        info: 'Apple M3 Pro; 18 GB; M3 Pro 18-Core; SSD 1024 GB'
    }],
    'Tablets' : [{
        name: 'Xiaomi Mi Pad 6',
        info: '256 GB, RAM 8 GB'
    }, {
        name: 'Apple iPad 2021',
        info: '64 GB, RAM 3 GB'
    }, {
        name: 'Samsung Galaxy Tab S9',
        info: '256 GB, RAM 8 GB'
    }, {
        name: 'Lenovo Yoga Tab 13',
        info: '128 GB, RAM 8 GB'
    }]
};


function showCategories() {
    for (let category in marketData) {
        const tempCategory = document.createElement('div');
        tempCategory.textContent = category;
        tempCategory.classList.add('category_item');
        tempCategory.addEventListener('click', () => {
            showProducts(category);
        });

        categoriesList.appendChild(tempCategory);
    }
}


function showProducts(category) {
    productsList.innerHTML = '';

    marketData[category].forEach(product => {
        const tempProduct = document.createElement('div');
        tempProduct.textContent = product.name;
        tempProduct.classList.add('product_item');
        tempProduct.addEventListener('click', () => {
            showInfo(product);
        });

        productsList.appendChild(tempProduct);
    })
}


function showInfo(product) {
    infoBlock.innerHTML = '';

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `${product.name}`;

    const infoDiv = document.createElement('div');
    infoDiv.textContent = `${product.info}`;

    const buyBtn = document.createElement('button');
    buyBtn.textContent = 'Buy';
    buyBtn.className = 'buy_btn';
    buyBtn.addEventListener('click', () => {
        alert(`Product ${product.name} purchased.`);
        productsList.innerHTML = '';
        infoBlock.innerHTML = '';
    });

    infoBlock.appendChild(nameDiv);
    infoBlock.appendChild(infoDiv);
    infoBlock.appendChild(buyBtn);
}

showCategories();