//fatorial de 10
let fatorial = 10;
let resultado = 1;

for (let i = fatorial; i > 1; i -= 1) {
    resultado = resultado * i;   
}
console.log(resultado);

//inverte palavra
let word = 'palavra';
let wordReverse = '';

for (let i = 0; i < word.length; i += 1) {
    wordReverse = wordReverse + word[word.length - 1 - i];
}
console.log(wordReverse);

// busca maior e mnor palavra dentro da array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length) {  
        maior = array[i];           
    }    
}
for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < menor.length) {
        menor = array[i];
    }
}
console.log(maior);
console.log(menor);

//acha maior numero primo
let biggestPrimeNumber = 0;

for (let numbers = 0; numbers <= 50; numbers += 1) {
    let isPrime = true;
    for (let numberDivisor = 2; numberDivisor < numbers; numberDivisor += 1) {
        if (numbers % numberDivisor === 0) {
            isPrime = false;
        }
    }
    if(isPrime) {
        biggestPrimeNumber = numbers;
    }
}
console.log(biggestPrimeNumber);