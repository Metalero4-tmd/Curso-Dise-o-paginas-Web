const autos = ["BMW", "FERRARI", "TOYOTA", "VOLVO"];
console.log(autos);

console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
  console.log(i + " - " + autos[i]);
}

autos[2]= 'HOnda';
console.log(autos);

autos.push('Audi');

console.log(autos);

console.log(autos.length);
autos[autos.length]= 'cadillac';
console.log(autos);
console.log(Array.isArray(autos));