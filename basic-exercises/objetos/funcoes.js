function biggestNumber (a, b, c) {
    if (a > b && a > c) {
        return a + ' é maior que ' + b + ' e ' + c;
    } else if (b > c && b > a) {
        return b + ' é maior que ' + a + ' e ' + c;
    } else {
        return c + ' é maior que ' + a + ' e ' + b;
    }
}
console.log(biggestNumber(10, 4, 60));