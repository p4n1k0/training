const a = 604;
const b = 4;
const c = 800;

//console.log(a + b);
//console.log(a - b);
//console.log(a * b);
//console.log(a / b);
//console.log(a % b);

if (a > b && a > c) {
    console.log("'a' é maior que 'b' e 'c'");
} else if (b > a && b > c) {
    console.log("'b' é maior que 'a' e 'c'");    
} else {
    console.log("'c' é maior que 'a' e 'b'");
}

//4. retornar valor se positivo, ou negativo, ou zero; 
const valor = 0;

if (valor > 0) {
    console.log('positive');
} else if (valor < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

//5.retorna true se soma dos angulos for 180, false se diferente de 180 e msg de erro caso algum angulo for negativo
const angulo1 = 40;
const angulo2 = -60;
const angulo3 = 80;

let somaDosAngulos = angulo1 + angulo2 + angulo3;
let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Erro, ângulo negativo encontrado')
}


