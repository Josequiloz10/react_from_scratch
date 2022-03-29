import {describe, expect, test} from "vitest"

describe('prueba demo.test.tsx', () => {
    test('string must be equals', () => {

        const mensaje = 'Hola mundo';

        const mensaje2 = `Hola mundo`

        expect(mensaje).toBe(mensaje2)
    })
})
