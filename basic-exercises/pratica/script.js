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

//6.
const pecaXadrez = 'Bispo';

switch (pecaXadrez.toLowerCase()) {
    case 'Peão':
        console.log('Peão -> só anda para frente');
        break;
    
    case 'bispo':
        console.log('Bispo -> só anda em diagonais');
        break;

    case 'Torre':
        console.log('Torre -> se move em linha reta horizontal e verticalmente');
        break;

    case 'Cavalo':
        console.log('Cavalo -> movimento em L');
        break;
        
    case 'Rainha':
        console.log('Rainha -> se move em linha reta - verticalmente, horizontalmente ou diagonalmente');
        break;
        
    case 'Rei':
        console.log('Rei -> move uma casa horizontalmente, verticalmente ou diagonalmente');
        break;
        
    default:
        console.log('Erro: peça inválida');   
        break;         
}

//7.
let nota = 40

if(nota < 0 || nota > 100) {
    console.log('Erro, nota incorreta');
} else if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');    
} else if (nota >= 60) {
    console.log('D');
} else if (nota >= 50) {
    console.log('E');
} else {
    console.log('F');
}


//8.retorna true se pelo menos uma das tres variaveis for par usando apenas um if
const n1 = 3;
const n2 = 67;
const n3 = 80;

let par = false

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    par = true;
};
console.log(par);

//9. retorna true se pelo menos uma das tres variaveis for impar usando apnas um if
const n1 = 3;
const n2 = 4;
const n3 = 60;

let impar = false;

if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
    impar = true;
};
console.log(impar);

//10.Calcula o lucro a empresa tera ao vender 1000 produtos sobre o imposto de 20% do custo de cada produto
const custoProduto = -5;
const valorVenda = 10;

if (custoProduto >= 0 && valorVenda >= 0) {
    const totalCustoProduto = custoProduto * 1.2; //custo do produto com 20% de imposto
    const lucro = (valorVenda - totalCustoProduto) * 1000;
    console.log(lucro);
} else {
    console.log('Erro, os valores não podem ser negativos');
}

//11.programa que, dado um salário bruto, calcule o líquido a ser recebido,descontando inss e ir
let aliquotaINSS;
let aliquotaIR;
let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto < 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
}

const baseSalarial = salarioBruto - aliquotaINSS;
console.log(baseSalarial)

if (baseSalarial <= 1903.98) {
    aliquotaIR = 0;
} else if (baseSalarial <= 2826.65) {
    aliquotaIR = (baseSalarial * 0.075) - 142.80;
} else if (baseSalarial <= 3751.05) {
    aliquotaIR = (baseSalarial * 0.15) - 374.80;
} else if (baseSalarial <= 4664.68) {
    aliquotaIR = (baseSalarial * 0.225) - 636.13;
} else {
    aliquotaIR = (baseSalarial * 0.275) - 869.36;
}

console.log('sálario: ' + (baseSalarial - aliquotaIR));



