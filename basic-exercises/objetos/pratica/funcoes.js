function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
console.log(verificaPalindrome('ovo'));
  
function getBiggestIndex(array) {
  let biggestIndex = 0;
  
  for (let i in array) {
    if (array[biggestIndex] < array[i]) {
      biggestIndex = i;      
    }
  }
  return biggestIndex;
}

getBiggestIndex([2, 3, 6, 7, 10, 1]);