//fatorial de 10
let fatorial = 10;
let resultado = 1;

for (let i = fatorial; i > 1; i -= 1) {
    resultado = resultado * i;   
}
console.log(resultado);

//inverte palavra
let word = 'tryber';
let wordReverse = '';

for (let i = 0; i < word.length; i += 1) {
    wordReverse = wordReverse + word[word.length - 1 - i];
}
console.log(wordReverse);