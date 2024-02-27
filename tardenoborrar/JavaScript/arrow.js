const saludar = () => {
    console.log('Hola');
}

saludar(); // Hola

const flecha = a => {
    const resultado = a ** 2;
    console.log(resultado)
}
flecha(5)

const velocimetro = (kmh) => {
    const mh = kmh * 1000
    console.log(mh)
}

velocimetro(6)

const area = (width, height) => {
    const a = width * height
    console.log(a)
}
area(10, 10)

const areaTriangulo = (base, altura) => {
    const b = base * altura / 2
    console.log(b)
}
areaTriangulo(10, 10)

const calculatePerimeter = radio => {
    const a = 2 * Math.PI * radio
    console.log('el perímetro de la circunferencia es ' + a)
}
calculatePerimeter(10)

const calculateArea = radioo => {
    const a = Math.PI * radioo * radioo
    console.log('el area de la circunferencia es ' + a)
}
calculateArea(21)

/****************************************** */
//ejercicio 1
function longitud(nombre) {

    console.log('la palabra tiene ' + nombre.length + ' ' + 'letras ')

}
longitud('Diego')

//ejercicio 2

function devuelvePrimeraLetra(palabra) {
    console.log('La priemra letra es ' + palabra.charAt(0))
}
devuelvePrimeraLetra("Diego")

//ejercicio 3

function devuelveUltimaLetra(palabra) {
    console.log('La ultima letra es ' + palabra.charAt(4))
}
devuelveUltimaLetra('Diego')

//ejercicio 4

function devuelveEnesimaLetra(palabra) {
    console.log('La enesima palabra es ' + palabra.charAt(9))
}
devuelveEnesimaLetra('murcielago')

//ejercicio 5

function substraer(palabra) {
    console.log('el fragmento que buscamos es ' + palabra.substring(3, 7))
}
substraer('wonderful day')

//ejercicio 6

function devuelveMasLarga2(txt1, txt2) {
    if (txt1.length > txt2.length) {
        return txt1

    } else if (txt1.length < txt2.length) {
        return txt2

    } else { return txt1 }
}
const a = devuelveMasLarga2('cara', 'Aula')
console.log(a)

//ejercicio 7

function devuelveLaMasLarga(txt1, txt2, txt3) {

    if (txt1.length > txt2.length) {
        return text1

    } else if (txt1.length > txt3.length) {
        return txt1

    } else if (txt2.length > txt1.length) {
        return txt2

    } else if (txt2.length > txt3.length) {
        return txt2

    } else if (txt3.length > txt1.length) {
        return txt3

    } else if (txt3.length > txt2.length) {
        return txt3

    } else if (text1.length === text2.length) {
        return 'Hay al menos dos cadenas iguales.'

    } else if (text2.length === text3.length) {
        return 'Hay al menos dos cadenas iguales.'

    } else if (txt3.length === txt1.length) {
        return 'Hay al menos dos cadenas iguales.'
    }
}
const b = devuelveLaMasLarga('hola', 'cielo', 'cielo')
console.log(b)

//ejercicio 8

function generarNombre(a1, b2, c3) {
    if (a1.length && b2.length && c3.length < 5) {
        return 'error';

    } else if (a1.length && b2.length && c3.length > 5) {
        return a1.substring(0, 3) + b2.substring(0, 3) + c3.substring(0, 3);
    }
}
const v = generarNombre('pelotas', 'brazos', 'calabaza');
console.log(v)

//ejercicio 9

function generarNombre2(a1, a2, a3) {
    if (a1.length && a2.length && a3.length < 5) {
        return a1.slice(-1) + a2.slice(-1) + a3.slice(-1)
    }
}
const g = generarNombre2('cara', 'cruz', 'flor')
console.log(g)

//ejercicio 10

function generarNombre3(b1, b2, b3) {
    if (b1.length && b2.length && b3.length < 5) {
        return 'error'
    } else if (b1.length && b2.length && b3.length > 5) {
        return b1.slice(-2) + b2.slice(-2) + b3.slice(-2)
    }
}
const m = generarNombre3('carambano', 'caracol', 'criatura')
console.log(m)

// ejercicio 11 y 12


function tieneLetra(cadena, letra) {
    if (cadena.toUpperCase().indexOf(letra.toUpperCase()) >= 0) {
        return 'true'
    } else return 'false'
}

const letra = tieneLetra('Hola', 'h');
console.log(letra)


// Ejercicio 13


const crearPalabra = (letra, num) => {

    let palabra = '';
    for (let i = 0; i < num; i++) {
        palabra = palabra + letra; // o palabra += letra
    }
    console.log(palabra)

}
crearPalabra('b', 10)

// ejercicio 14


const crearPalabra2 = (letra, num) => {

    let palabra = ''.toUpperCase();
    for (let i = 0; i < num; i++) {
        palabra = palabra + letra.toUpperCase(); // o palabra += letra
    }
    console.log(palabra)

}
crearPalabra2('b', 10)

// ejercicio 15


const addGuiones = (cadena) => {
    let palabraNue = ''
    for (let i = 0; i < cadena.length; ++i) {
        palabraNue += cadena[i] + '-';

    } return palabraNue;

}
const palabraNue = addGuiones('Nadal')
console.log(palabraNue)

//  ejercicio 16


const contadorDeLetras = (text, letra) => {
    let contadorLetras = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === letra) contadorLetras++;
    }
    return contadorLetras
}
const cantidadletras = contadorDeLetras('caracol', 'a')
console.log(cantidadletras)


//ejercicio 17

const contadorDeLetrass = (text, letra) => {
    let contadorLetras = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.toUpperCase()[i] === letra.toUpperCase()) contadorLetras++;
    }
    return contadorLetras
}
const cantidadletrass = contadorDeLetrass('cArAcoAAaal', 'a')
console.log(cantidadletrass)


//Ejercicio 18


const contadorDeLetras2 = (txt1, txt2, letra) => {
    let contadorL1 = 0
    let contadorL2 = 0

    for (let i = 0; i < txt1.length; i++) {
        if (txt1.toUpperCase()[i] === letra.toUpperCase()) {
            contadorL1++;
        }
    }

    for (let i = 0; i > txt2.length; i++) {
        if (txt2.toUpperCase()[i] === letra.toUpperCase()) {
            contadorL2++;
        }
    } if (contadorL1 > contadorL2)
        return txt1;

    else if (contadorL2 > contadorL1)
        return txt2;


    else return 'son iguales';

}
const Prueba18 = contadorDeLetras2('caarambano', 'caraa', 'a')
console.log(Prueba18)




//ejercicio 19

const toCase = (text1) => {
    return text1.toLowerCase() + '-' + text1.toUpperCase()

}
const palabra = toCase('Diego')
console.log(palabra)

// ejercicio 20

const shortCut = (text1, text2) => {
    return text1.charAt(0) + '-' + text2.charAt(0)
}
const recorte = shortCut('Diego', 'Santiago')
console.log(recorte)


//ejercicio 21

const firstChar = (text) => {
    return text.trim().charAt(0)
}
const textopasado = firstChar(' Ejemplo ')
console.log(textopasado)

//ejercicio 22


const indexOfIgnoreCase = (text1, text2) => {
    return text1.toUpperCase().indexOf(text2.toUpperCase())
}
console.log(indexOfIgnoreCase('bit', 'ITÑ'))

//ejercicio 23


const firstWord = (text1) => {
    return text1.substring(0, 3)
}

console.log(firstWord('see and stop'))



