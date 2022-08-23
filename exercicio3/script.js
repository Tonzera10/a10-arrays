const arrayNumbers = [3, 9, 4, 7, 2, 6, 5];
const arrayStrings = ["Everton", "Lima", "Mello", "Melani", "Oliveira"];
const arrayMisto = [7, "Ton", true, "Mel", false, 5];

const arrayNumbersCopia = arrayNumbers.slice();
const arrayStringsCopia = arrayStrings.slice();
const arrayMistoCopia = arrayMisto.slice();

arrayNumbersCopia.push(1); //Adicionado ítem number 1
console.log(arrayNumbers);
console.log(arrayNumbersCopia);
console.log("------------------------------------------------")

arrayStringsCopia.pop(); //Removido Ultimo ítem
console.log(arrayStrings);
console.log(arrayStringsCopia);
console.log("------------------------------------------------")

arrayMistoCopia.splice(1,1); //Removido segundo ítem
console.log(arrayMisto);
console.log(arrayMistoCopia);
console.log("------------------------------------------------")