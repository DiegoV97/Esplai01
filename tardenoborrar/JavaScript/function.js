function primera(ejemplo) {
    console.log(ejemplo ? 'Sí, eso es cierto' : 'No, eso es falso')

}
primera(true)

function hoyQuieroComer(comida) {
    console.log('hoy quiero comer ' + comida)
}


function calcularCubo(num) {
    console.log(num ** 3)
}
calcularCubo(6)

function CalcularArea(alto, ancho) {
    console.log(alto * ancho)
}
CalcularArea(20, 16)

function Areatriangulo(base, altura) {
    console.log('El area del triangulo es ' + base * altura / 2)
}
Areatriangulo(15, 15)

function calculaPerimetro(radio) {
    console.log('El perimetro de la circunferencia es ' + 2 * Math.PI * radio)
}
calculaPerimetro(14)

function calculaArea(radio) {
    console.log('El area de la circunferencia es ' + Math.PI * radio ** 2)
}
calculaArea(14)


hoyQuieroComer('pizza')
hoyQuieroComer('garbanzos')

function echo(name) {
    return name
}
const x = echo('gretta')
console.log(x)
const c = echo('C02')
console.log(c)

function saludar(alumno) {
    return 'Hola ' + alumno
}
const d = saludar('Ada ')
console.log(d)
const g = saludar('Grace ')
console.log(g)


function test(val) {
    if (val >= 10 && val <= 20) { // Cambia esta línea
        return "Inside";
    } else {
        return "Outside";
    }
}
const b = test(10)
console.log(b)



function testEqual(val) {
    if (val == 12) { // Cambia esta línea
        return "Equal";
    }
    return "Not Equal";
}
const s = testEqual(12)
console.log(s)



function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Mayor que 5";
    } else {
        result = "Menor o igual a 5";
    }
    return result;
}
const y = testElse(3)
console.log(y)



function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }

    else if (val < 5) {
        result = "Smaller than 5";
    }

    else if (val == 5) {
        result = "Equal to 5";
    }
    return result;
}
const k = testElse(3)
console.log(k)


