function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
console.log(verificaPalindrome('ovo'));
  
function retornaIndiceMenorValor() {
  let menor = array[0];
  let indice = 0;
  for (let i = 1; i < array.length; i++) {
      if (array[i] < menor) {
          menor = array[i];
          indice = i;
      }
  }
  return indice;
}

let array = [2, 4, 6, 7, 10, 0, -3]; 
console.log(retornaIndiceMenorValor(array));