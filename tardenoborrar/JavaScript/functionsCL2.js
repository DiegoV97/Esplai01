function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else if (num >= 20) {
        return " huge"
    }
}
const r = testSize(15)
console.log(r)

function nand(a, b) {
    if (a < b ? "true " : "true ")
        return "false"



}
const x = nand()
console.log(x)



function mam(b1, b2) {
    if (b1 === true && b2 === true) {
        return 'false';
    } else {
        return true;
    }
}

function nor(a1, a2) {
    if (a1 === false && a2 === false) {
        return 'true'
    } else {
        return 'false'
    }
}

const n = nor(true, true)
console.log(n)


/*******************************/

function xor(c1, c2) {
    if (c1 === c2) {
        return 'false'
    } else { return 'true' }
}
const v = xor(10, 10)
console.log(v)

