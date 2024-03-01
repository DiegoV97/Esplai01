// location.href = 'file:///C:/Users/tarda/Desktop/tardeNOBORRAR/tardenoborrar/JavaScript/href.html'
// a la izquierda del = redirecciona a la pagina

const paginaHref = location.href
const ultimaBarra = paginaHref.lastIndexOf('/') + 1
const page = paginaHref.substring(ultimaBarra)

console.log(page)

// repetir en casa




