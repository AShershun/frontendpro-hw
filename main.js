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
let orderList = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
const ordersContainer = document.querySelector('#ordersContainer');

const regionalCities = [
    "Kiev", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih",
    "Mykolaiv", "Mariupol", "Luhansk", "Vinnytsia", "Makiivka", "Simferopol", "Kherson",
    "Chernihiv", "Kropyvnytskyi", "Poltava", "Zhytomyr", "Sumy", "Rivne", "Ternopil",
    "Ivano-Frankivsk", "Uzhhorod", "Lutsk", "Cherkasy", "Khmelnytskyi", "Chernivtsi"
];

const marketData = {
    'Smartphones': [{
        name: 'Google Pixel 8 Pro',
        info: '256 GB, RAM 12 GB',
        price: 850,
    }, {
        name: 'Apple iPhone 15 Pro',
        info: '256 GB, RAM 8 GB',
        price: 1100,
    }, {
        name: 'Samsung S24 Ultra',
        info: '512 GB, RAM 12 GB',
        price: 1000,
    }, {
        name: 'Nothing Phone 2',
        info: '128 GB, RAM 8 GB',
        price: 700,
    }],
    'Laptops' : [{
        name: 'Lenovo Legion Pro 7',
        info: 'Core i9; 13900HX; 32 GB; RTX 4080; SSD M.2 1024 GB',
        price: 2800,
    }, {
        name: 'Asus ROG Strix G16',
        info: 'Core i7 13650HX; 32 GB; RTX 4060; SSD M.2 512 GB',
        price: 2900,
    }, {
        name: 'HP Pavilion Plus 14',
        info: 'Core i5 13500H; 16 GB; Iris Xe Graphics G7 80EUs; SSD M.2 1024 GB',
        price: 1000,
    }, {
        name: 'Apple MacBook Pro 16',
        info: 'Apple M3 Pro; 18 GB; M3 Pro 18-Core; SSD 2048 GB',
        price: 3800,
    }],
    'Tablets' : [{
        name: 'Xiaomi Mi Pad 6',
        info: '256 GB, RAM 8 GB',
        price: 450,
    }, {
        name: 'Apple iPad 2021',
        info: '64 GB, RAM 3 GB',
        price: 450,
    }, {
        name: 'Samsung Galaxy Tab S9',
        info: '256 GB, RAM 8 GB',
        price: 700,
    }, {
        name: 'Lenovo Yoga Tab 13',
        info: '128 GB, RAM 8 GB',
        price: 750,
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

//Всі товари обранної категорії
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

//Вся інформація про обранний товар
function showInfo(product) {
    infoBlock.innerHTML = '';

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `${product.name}`;

    const infoDiv = document.createElement('div');
    infoDiv.textContent = `${product.info}`;

    const priceDiv = document.createElement('div');
    priceDiv.textContent = `${product.price}$`

    const buyBtn = document.createElement('button');
    buyBtn.textContent = 'Buy';
    buyBtn.className = 'buy_btn';
    buyBtn.addEventListener('click', () => {
        selectedProduct = product;
        showOrderForm();
    });

    infoBlock.appendChild(nameDiv);
    infoBlock.appendChild(infoDiv);
    infoBlock.appendChild(priceDiv);
    infoBlock.appendChild(buyBtn);
}

//Закриття модального війкна
function closeModalWindow() {
    modalBackground.style.display = 'none';

    document.querySelector('#fullName').value = '';
    document.querySelector('#numNP').value = '';
    document.querySelector('#commentForOrder').value = '';
    document.querySelector('#quantityProduct').value = '1';
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
    if (name === '' || city === '' || postOffice === '' || quantity === '') {
        alert('Please fill all required fields of the form.');
        return;
    }

    //Зберігаємо все про замовлення у об'єкті для зручного використання та для зберігання у localStorage
    const order = {
        product: {
            model: selectedProduct.name,
            info: selectedProduct.info,
            price: selectedProduct.price * quantity
        },
        info: {
            date: new Date(),
            name: name,
            city: city,
            postOffice: postOffice,
            payment: payment,
            quantity: quantity,
            comment: comment
        }
    };

    orderList.push(order);
    localStorage.setItem('orders', JSON.stringify(orderList));

    showOrderDetails();
    createDetailBlock(order);
});


//Побудова контенту з інформацією про замовлення
function createDetailBlock(order) {
    detailContent.innerHTML = `
        <div class="detail_item"><span>Purchased:</span> ${order.product.model}</div>
        <div class="detail_item"><span>Description:</span> ${order.product.info}</div>
        <div class="detail_item"><span>Price:</span> ${order.product.price}$</div>
        <div class="detail_item"><span>Your name:</span> ${order.info.name}</div>
        <div class="detail_item"><span>Your city:</span> ${order.info.city}</div>
        <div class="detail_item"><span>Your post:</span> ${order.info.postOffice}</div>
        <div class="detail_item"><span>Payment:</span> ${order.info.payment}</div>
        <div class="detail_item"><span>Quantity:</span> ${order.info.quantity}</div>`;

    //Перевірка на наявність коментаря
    detailContent.innerHTML += order.info.comment ?
        `<div class="detail_item"><span>Your comment:</span> <br> ${order.info.comment}</div>
         <button class="button_submit" id="btnDetailOk">Ok</button>` :
        `<button class="button_submit" id="btnDetailOk">Ok</button>`;

    document.querySelector('#btnDetailOk').addEventListener('click', function() {
        closeModalWindow();

        productsList.innerHTML = '';
        infoBlock.innerHTML = '';
    });
}

//Сховати категорії, відобразити замовлення
document.querySelector('#navMyOrders').addEventListener('click', function () {
    document.querySelector('#contMyOrders').style.display = 'block';
    document.querySelector('.wrapper').style.display = 'none';

    showMyOrders(orderList);
})

//Сховати замовлення, відобразити категорії
document.querySelector('#navCategories').addEventListener('click', function () {
    document.querySelector('.wrapper').style.display = 'flex';
    document.querySelector('#contMyOrders').style.display = 'none';
})

//Відобразити усі зроблені замовлення
function showMyOrders(orderList) {
    ordersContainer.innerHTML = '';

    orderList.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order_block');

        const orderHeader = document.createElement('div');
        orderHeader.classList.add('order_header');
        orderHeader.addEventListener('click', () => {
           const orderDetails = document.createElement('div');
           orderDetails.innerHTML = `
                <div><span>Price:</span> ${order.product.price} $</div>
                <div><span>Quantity:</span> ${order.info.quantity}</div>`;

            orderDiv.appendChild(orderDetails);
        });

        const orderModelName = document.createElement('div');
        orderModelName.innerHTML = order.product.model;
        orderModelName.classList.add('order_model_name');

        const deleteOrderBtn = document.createElement('div');
        deleteOrderBtn.textContent = '×'
        deleteOrderBtn.classList.add('delete_order_btn');
        deleteOrderBtn.addEventListener('click', () => deleteOrder(order));

        const orderDate = document.createElement('div');
        orderDate.textContent = new Date(order.info.date).toLocaleString();
        deleteOrderBtn.classList.add('delete_order_btn');


        ordersContainer.appendChild(orderDiv);
        orderDiv.appendChild(orderHeader);
        orderDiv.appendChild(orderDate);
        orderHeader.appendChild(orderModelName);
        orderHeader.appendChild(deleteOrderBtn);
    });
}

//Видалення замовлення (за датою)
function deleteOrder(order) {
    orderList = orderList.filter(item => item.info.date !== order.info.date);
    localStorage.setItem('orders', JSON.stringify(orderList));

    showMyOrders(orderList);
}

showCategories();