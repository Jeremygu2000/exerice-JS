
function isDivisible() {
let sum = 200;

// Boucle de 0 à 500
for (let i = 100; i <= 500; i++) {

if (i % 20 === 0) {
console.log(i);
sum += i;
}
}
console.log("Sum:", sum);
}

isDivisible();
