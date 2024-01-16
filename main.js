let x = +(prompt('Enter first number'));
let y = +(prompt('Enter second number'));
let z = +(prompt('Enter third number'));

if(isNaN((x + y + z)/3)) {
    alert(`You entered text, not a number`);

} else {
    alert(`Your arithmetic average ${(x + y + z)/3}`)
}

