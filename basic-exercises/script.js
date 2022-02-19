//encontra perímetro de um retângulo
const base = 5;
let height = 8;

const area = base * height;
//console.log(area);

const perimeter = 2 * (base + height);
//console.log(perimeter);

//estruturas condicionais
const nota = 60;

if (nota >= 80) {
   // console.log('Parabéns, você foi aprovada(o)!');
} else if (nota < 80 && nota >= 60) {
   // console.log('Você está na nossa lista de espera');
} else {
   // console.log('Você foi reprovada(o)');
}

//Operadores lógicos &&
const currentHour = 5;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!';
} else if (currentHour > 4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém passado'
}
//console.log(message);

//OR
let weekDay = 'sábado';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira'){
   // console.log('Oba,mais um dia de aprendizado na Trybe >:D');
} else if (weekDay === 'sábado' || weekDay === 'domingo') {
   // console.log('FINALMENTE, descanso merecido UwU');
}

//NOT
//console.log((2 + 2) === 4);
//console.log(!(2 + 2) === 4); 

//NOT em strings
const squirtle = "melhor pokemon inicial"; 

//console.log(!squirtle); // false

//NOT em numeros
//console.log(!42); // false 

//console.log(!0); // true 
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

//NOT em valores nulos
//console.log(!null); // true

//NOT em valores indefinidos
//console.log(!undefined); // true

//Swith e Case
let pessoa = 'falta';

switch (pessoa) {
    case 'aprovada':
        console.log('Você foi aprovada(o)');
        break;

    case 'lista':
        console.log('Você está na lista de espera');
        break;
        
    case 'reprovada':
        console.log('Você foi reprovada(o)')
        break;    
    
    default:
        console.log('não se aplica');    
}




