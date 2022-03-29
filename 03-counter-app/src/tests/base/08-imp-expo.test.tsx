import {describe, expect, test} from "vitest"
import {getHeroeById, getHeroesByOwner} from '../../bases/08-imp-expo';
import heroes from "../../data/heroes";

describe('Testing functions from heroes', () => {
    test('it mush return a hero by id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('it mush return undefined if hero does not exist', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toBe(undefined);
    })
})

describe('Testing functions from heroes 2', () => {
    test('it mush return a hero heroes by DC franchise', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeOwnerData = heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroeOwnerData);
    })

    test('it mush return a hero heroes by Marvel franchise', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        const heroeOwnerData = heroes.filter(h => h.owner === owner);
        expect(heroe.length).toBe(2);
    })
})