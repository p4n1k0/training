function biggestNumber (a) {
    if (a > 0) {
        return 'positive';
    } else if (a < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}    
console.log(biggestNumber(10));