const array = [1, 2, 3, 4, 5, 6, 7];
let index;
function removeElement(array, el) {
    index = array.indexOf(el);
    array.splice(index, 1);
    return array;
}

removeElement(array, 5 );
console.log(array);

