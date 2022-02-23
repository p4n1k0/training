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

function retornaMaiorNome() {
  let maiorNome = array[0];  
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maiorNome.length) {
      maiorNome = array[i];      
    }
  }
  return maiorNome;
}
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(retornaMaiorNome(array));

function buscaNumeroRepetido() {
  let numeroRepetido = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] ===  i) {
      numeroRepetido = array[i];
    }    
  }
  return numeroRepetido;
}
let array = [2, 3, 2, 5, 8, 2, 3];

console.log(buscaNumeroRepetido(array));

function fazSomatorio(N) {
  let somatorio = 1;
  let contador = 0;
  
  for (let i = 0; i < N.length; i += 1) {
    somatorio = somatorio * N[i];
    contador = contador + 1;
  }
  return somatorio
}
console.log(fazSomatorio(5));