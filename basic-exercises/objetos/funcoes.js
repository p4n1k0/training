function biggestNumber (a, b) {
    if (a > b) {
        return a + ' é maior que ' + b;
    } else {
        return b + ' é maior que ' + a;
    }
}
console.log(biggestNumber(10, 4));