function angulosDeTriangulo(x, y, z) {
   let somaDosAngulos = x + y +z;

   if (x < 0 || y < 0 || z < 0) {
    console.log('Erro, angulo invalido encontrado');
   } else if (somaDosAngulos === 180)  {
       console.log(true);
   } else {
       console.log(false);  
   }
}
angulosDeTriangulo( 60, 40, -80);