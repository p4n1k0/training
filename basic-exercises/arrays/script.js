//Obtem valor de serviços
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//obtem índice de portfólio
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Adiciona 'Contato' ao menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);

//FOR usa for para imprimir elementos da array
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
}

//FOR OF usa forof para imprimir elementos da array
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (const iterator of names) {
    console.log(iterator);
}