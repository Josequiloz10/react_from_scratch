//@ts-ignore

const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre: string) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, mundo`;

console.log(saludar('Joseito'))
console.log(saludar2('Joseito'))
console.log(saludar4())

const getUser = () => ({
        uid: 'abc',
        username : 'Josequiloz'
    })

const user = getUser();
console.log(user)

const getUsuarioActivo = (nombre: string) => ({
 uid: 'ABC567',
 username: nombre
})

const userActivo = getUsuarioActivo('Batman');
console.log(userActivo);
