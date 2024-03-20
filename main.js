'use strict'

const categoriesList = document.querySelector('#categories_list');
const productsList = document.querySelector('#products_list');
const infoBlock = document.querySelector('#product_info');

const modalBackground = document.querySelector('#modalBackground');
const orderFormCont = document.querySelector('#orderContainer');
const orderDetailsCont = document.querySelector('#infoOrder');
const detailContent = document.querySelector('#detailBlock');

const citySelect = document.querySelector('#citySelect');
const confirmBtn = document.querySelector('#confirmOrder');

let selectedProduct;

const regionalCities = [
    "Kiev", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih",
    "Mykolaiv", "Mariupol", "Luhansk", "Vinnytsia", "Makiivka", "Simferopol", "Kherson",
    "Chernihiv", "Kropyvnytskyi", "Poltava", "Zhytomyr", "Sumy", "Rivne", "Ternopil",
    "Ivano-Frankivsk", "Uzhhorod", "Lutsk", "Cherkasy", "Khmelnytskyi", "Chernivtsi"
];

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
        selectedProduct = product;
        showOrderForm();
    });

    infoBlock.appendChild(nameDiv);
    infoBlock.appendChild(infoDiv);
    infoBlock.appendChild(buyBtn);
}

//Закриття модального війкна
function closeModalWindow() {
    modalBackground.style.display = 'none';

    document.querySelector('#fullName').value = '';
    document.querySelector('#numNP').value = '';
    document.querySelector('#commentForOrder').value = '';
}

document.querySelector('#close-btn').addEventListener('click', closeModalWindow);

modalBackground.addEventListener('click', closeModalWindow);

//Запобігання спливанню події закривання елементу modalBackground
document.querySelector('#orderModal').addEventListener('click', function(event) {
    event.stopPropagation();
});

//Заповнення select Міст
regionalCities.forEach(city => {
    const option = document.createElement('option');
    option.textContent = city;
    citySelect.appendChild(option);
});

//Збільшення поля кількості товарів
document.getElementById('incrementBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('quantityProduct').stepUp();
});

//Зменьшення поля кількості товарів
document.getElementById('decrementBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('quantityProduct').stepDown();
});

function showOrderForm() {
    modalBackground.style.display = 'block';
    orderFormCont.style.display = 'block';
    orderDetailsCont.style.display = 'none';
}

function showOrderDetails() {
    orderFormCont.style.display = 'none';
    orderDetailsCont.style.display = 'block';
}


//Підтверження замовлення
confirmBtn.addEventListener('click', function() {

    const name = document.querySelector('#fullName').value.trim();
    const city = document.querySelector('#citySelect').value.trim();
    const postOffice = document.querySelector('#numNP').value.trim();
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const quantity = document.querySelector('#quantityProduct').value;
    const comment = document.querySelector('#commentForOrder').value.trim();

    // Перевірка на на заповнення полів
    if (name.trim() === '' || city.trim() === '' || postOffice.trim() === '' || quantity.trim() === '') {
        alert('Please fill in all fields of the form.');
        return;
    }

    //На майбутнє у вигляді об'єкту =)
    const orderInfo = {
        name: name,
        city: city,
        postOffice: postOffice,
        payment: payment,
        quantity: quantity,
        comment: comment
    };

    showOrderDetails();
    createDetailBlock(orderInfo, selectedProduct);
});


//Побудова контенту з інформацією про замовлення
function createDetailBlock(orderInfo, product) {
    detailContent.innerHTML = `
        <div class="detail_item"><span>Purchased:</span> ${product.name}</div>
        <div class="detail_item"><span>Description:</span> ${product.info}</div>
        <div class="detail_item"><span>Your name:</span> ${orderInfo.name}</div>
        <div class="detail_item"><span>Your city:</span> ${orderInfo.city}</div>
        <div class="detail_item"><span>Your post:</span> ${orderInfo.postOffice}</div>
        <div class="detail_item"><span>Payment:</span> ${orderInfo.payment}</div>
        <div class="detail_item"><span>Quantity:</span> ${orderInfo.quantity}</div>`;

    //Перевірка на наявність коментаря
    detailContent.innerHTML += orderInfo.comment ?
        `<div class="detail_item"><span>Your comment:</span> <br> ${orderInfo.comment}</div>
         <button class="button_submit" id="btnDetailOk">Ok</button>` :
        `<button class="button_submit" id="btnDetailOk">Ok</button>`;

    document.querySelector('#btnDetailOk').addEventListener('click', function() {
        closeModalWindow();

        productsList.innerHTML = '';
        infoBlock.innerHTML = '';
    });
}

showCategories();