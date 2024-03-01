//calculadora  con  prompt

const n = (prompt('introducir un número'))
const n1 = parseInt(n)
const a = (prompt('introducir otro número'))
const a1 = parseInt(a)
const op = (prompt('elegir operación'))

if (op == '+') {
    alert(n1 + a1)
} else if (op == '-') {
    alert(op = n1 - a1)
} else if (op == 'x') {
    alert(n1 * a1)
} else if (op == '/') {
    alert(n1 / a1)
}








