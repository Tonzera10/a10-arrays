const arrayNumbers = [3, 9, 4, 7, 2, 6, 5];
console.log(arrayNumbers);
const arrayStrings = ["Everton", "Lima", "Mello", "Melani", "Oliveira"];
console.log(arrayStrings);
const arrayMisto = [7, "Ton", true, "Mel", false, 5];
console.log(arrayMisto);
console.log("------------------------------------------------");

console.log("Quantidade de ítens do primeiro array: ", arrayNumbers.length);
console.log("Quantidade de ítens do segundo array: ", arrayStrings.length);
console.log("Quantidade de ítens do terceiro array: ", arrayMisto.length);
console.log("------------------------------------------------");

console.log("Primeiro ítem do primeiro array: ", arrayNumbers[0]);
console.log("Segundo ítem do segundo array: ", arrayStrings[1]);
console.log("Terceiro ítem do terceiro array: ", arrayMisto[2]);
console.log("------------------------------------------------");

console.log("O número 5 está incluído no primeior array? ", arrayNumbers.includes(5));
console.log("O número 8 está incluído no terceiro array? ", arrayMisto.includes(8));
console.log("------------------------------------------------");