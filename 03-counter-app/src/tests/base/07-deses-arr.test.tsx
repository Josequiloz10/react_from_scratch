import {describe, expect, test} from "vitest"
import {retornaArreglo} from '../../bases/07-deses-arr';

describe('Desestructuring test', () => {
    test('It must return a string and a number ', () => {

        const [letras, numeros] = retornaArreglo()

        expect(letras).toEqual('ABC')
        expect(typeof letras).toBe('string')

        expect(numeros).toEqual(123)
        expect(typeof numeros).toBe('number')
    })
})