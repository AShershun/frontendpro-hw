'use strict'

const array = [1, 2, [1, 2, 3], 3, 4, 5, [1, 2, 3, 4]]
let call_flag = false;
let sub_index = 1;

function generateList(arr) {
    const ul = document.createElement('ul');

    arr.forEach(elem => {
        const li = document.createElement('li');

       if (Array.isArray(elem)) {
           call_flag = true;

           li.appendChild(generateList(elem));
       } else {
           li.textContent = call_flag ? `1.${sub_index++}` : elem;
       }

        ul.appendChild(li);
    });

    call_flag = false;
    sub_index = 1;
    return ul;
}

const list = generateList(array);
document.body.appendChild(list);