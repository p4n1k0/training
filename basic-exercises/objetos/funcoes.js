function biggestNumber (a, b, c) {
   if (a > b && a > c) {
       console.log(a + ' é maior que ' + b + ' e ' + c);
   } else if (b > a && b > c) {
       console.log(b + ' é maior que ' + a + ' e ' + c);
   } else {
       console.log(c + ' é maior que ' + a + ' e ' + b);
   }
}
biggestNumber(10, 40, 88);