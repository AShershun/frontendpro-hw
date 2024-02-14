let table = document.querySelector('#table');
let counter = 1;

for(let i = 0; i < 10; i++) {
    let row = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.textContent = counter;
        counter++;
        cell.style.padding = '15px';
        cell.style.border = '1px solid grey';
        cell.style.textAlign = 'center';
        row.appendChild(cell);
    }
    table.appendChild(row);
}
table.style.border = '1px solid grey';