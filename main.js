const num = +(prompt("Введіть число:"));
const exponent = +(prompt("Введіть ступінь:"));

if (isNaN(num) || isNaN(exponent)) {
    alert("Будь ласка, введіть коректні числові значення.");
} else {
    alert(pow(num, exponent));
}

function pow(num, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return num * pow(num, exponent - 1);
    }
}