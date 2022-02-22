function angulosDeTrinagulo (x, y, z) {
    somaDosAngulos = x + y + z;
    if (somaDosAngulos === 180) {
        return true
    } else if ( x < 0 || y < 0 || z < 0) {
        return 'Erro, ângulo incorreto';
    }
}    
console.log(angulosDeTrinagulo(10, 160, 10));