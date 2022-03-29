// @ts-ignore
const nombre = 'Jose';
// @ts-ignore
const apellido = 'Quilarque';
// @ts-ignore
const nombreCompleto = `${nombre} ${apellido}`

// @ts-ignore
// console.log(nombreCompleto);

// @ts-ignore
export function getSaludo(nombre = 'Coro'){
    return `Hola ${nombre}`;
}

// @ts-ignore
// console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)