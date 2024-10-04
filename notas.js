// var notasFiscais = [
//     {numeros: 1111, valor: 10},
//     {numeros: 2222, valor: 20},
//     {numeros: 3333, valor: 30}
// ];

// console.log("Todas as notas fiscais: ", notasFiscais);

// var total = notasFiscais[0].valor + notasFiscais[1].valor + notasFiscais[2].valor;
// console.log("Total das somas: ", total);

// var media = total / 3;
// console.log("Media das notas fiscais: ", media);

// console.log("Valor da maior nota fiscal: ", notasFiscais[2]);
// console.log("Valor da menor nota fiscal: ", notasFiscais[0]);
var arrayNota = [];

for (var i = 0; i < 3; i++) {
    var numeros = parseInt(prompt("Qual o número da " + (i + 1) + "° nota fiscal"));
    var valor = parseInt(prompt("Qual o valor da  " + (i + 1) + "° nota fiscal"));

    var notasFiscais = {
        numeros: numeros,
        valor: valor
    };

    arrayNota.push(notasFiscais); // Colocando o objeto (notasFiscais) com os valores dentro da array (arrayNota)
}

console.log("Todas as notas fiscais: ", arrayNota);

var totalSoma = 0;
for (var i = 0; i < arrayNota.length; i++) {
    totalSoma += arrayNota[i].valor;
}

console.log("Total das somas: ", totalSoma);

var media = totalSoma / arrayNota.length;
console.log("Media das notas fiscais: ", media.toFixed(2));

var maiorValor = arrayNota[0];
for (var i = 1; i < arrayNota.length; i++) {
    if (arrayNota[i].valor > maiorValor.valor) {
        maiorValor = arrayNota[i];
    }
}

console.log("Maior valor da nota fiscal: ", maiorValor);

var menorValor = arrayNota[0];
for (var i = 1; i < arrayNota.length; i++) {
    if (arrayNota[i].valor < menorValor.valor) {
        menorValor = arrayNota[i];
    }
}

console.log("Menor valor da nota fiscal: ", menorValor);
