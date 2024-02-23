const txt1 = 'este es el principio'
const txt2 = 'este es el final'
const txt3 = txt1 + ' ' + txt2
console.log(txt3)

const euro = 7
const dolares = euro * 2
console.log(dolares)

const precio = 100
const precioConIva = precio * 1.21;
console.log(precioConIva)

const ancho = 4
const alto = 7
const area = (ancho * alto) / 2
console.log(area)

const centigrados = 20
const fahrenheit = (centigrados * 9 / 5) + 32
console.log(fahrenheit)

const nombre = 'Juan'
const material = 'madera'
const dimensiones = 'diminutas'
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita'
console.log(`${nombre}  ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}`)

let myVar = 87;
myVar = ++myVar;
console.log(myVar);

let myVarr = 11;
myVar = myVarr--;
console.log(myVarr);

let x = 3;
x++;
x = x * 2;
x--;
console.log(x)

const dato1 = 10;
const dato2 = 10;
if (dato1 === dato2) {
    console.log('exito');
}

if (10 == 10) {
    console.log('You got a true!')
} else { console.log('You got a false!') }

const nota = 7
if (nota > 5) { console.log('Aprobado') }
else if (nota == 5) { console.log('Aprobado por los pelos') }
else { console.log('suspenso') }


const i = 20
if (i >= 0) { console.log('positivo') }
else { console.log('negativo') }

if (i % 2 === 0) { console.log('es par') }
else { console.log('impar') }

if (i % 5 === 0) { console.log('es multiplo de 5') }
else { console.log('no es multiplo de 5') }

if (i % 10 === 0) { console.log('es multiplo de 10') }
else { console.log('no es multiplo de 10') }

if (i > 100) { console.log('es mayor de 100') }
else { console.log('es menor de 100') }

const n1 = 3
const n2 = 7
const op = ''
if (op === '+') { console.log(n1 + n2) }
else if (op === '-') { console.log(n1 - n2) }
else if (op === '*') { console.log(n1 * n2) }
else if (op === '/') { console.log(n1 / n2) }


const a = 15

console.log(a > 0 ? 'a es porsitivo' : 'a es negativo')


console.log(a % 2 === 0 ? 'a es par' : 'a es impar')

const color = 'amarillo';
switch (color) {
    case 'rojo':
        console.log('Has escogido rojo');
        break;
    case 'azul':
        console.log('Has escogido azul');
        break;
    case 'amarillo':
        console.log('has escogido amarillo');
        break;
    default:
        console.log('No has escogido ningún color de la lista!');
}

const golosina = 'nubes';

switch (golosina) {
    case 'chicle':
        console.log('Has escogido un chicle');
        break;
    case 'gominola':
        console.log('Has escogido una gominola');
        break;
    case 'regaliz':
        console.log('Has escogido un regaliz');
        break;
    default: console.log('No has escogido ninguna golosina')
}

for (let n = 0; n < 100; n = n + 2) {
    console.log(n)
}

for (let m = 0; m < 100; m++) {
    if (m % 2 === 0) {
        console.log(m)
    }
}

for (let n = 0; n < 20; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('fizzbuzz')

    } else if (n % 3 === 0) {
        console.log('Fizz')

    } else if (n % 5 === 0) console.log('Buzz')
}
let r = 0
for (let i = 5; i >= 0; i--) { r += i } console.log(r)


for (let i = 0; i <= 10; ++i) { console.log('7 *' + i + ' = ' + 7 * i) }

for (let i = 1; i <= 10; i++) {
    for (let x = 1; x <= 10; x++) {
        console.log(i + ' * ' + x + ' = ' + i * x);
    }
}
