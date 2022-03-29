import {describe, expect, test} from "vitest"
import {getHeroesByIdAsync} from '../../bases/09-promises';
import heroes from "../../data/heroes";

describe('Testing promises', () => {
    test('it should return a hero async', ( done ) => {
        const id = 1;
        getHeroesByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0])
                done();
            })
    })

    test('it should return an error uf  hero does not exist', ( done ) => {
        const id = 15;
        getHeroesByIdAsync(id)
            .catch (error => {
                expect(error).toBe('No se pudo encontrar el heroe');
                done();
            });
    });
})

