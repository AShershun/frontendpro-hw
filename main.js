function makeSum() {
    let s = 0;
    function operation(x) {
        s += x;
        console.log(s);
    }

    return operation;
}
const sum = makeSum();

sum(3);
sum(5);
sum(20);