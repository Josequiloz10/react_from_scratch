import {describe, expect, test} from "vitest"
import {getSaludo} from '../../bases/02-template-strings';

describe('Pruebas 02-template-strings', () => {
    test('testing method getSaludo, must return Hola Jose', () =>{
        const nombre = 'Jose'
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })
})

    test('testing method getSaludo, must return Hola Coro', () =>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Coro' );
    })

