import {describe, expect, test} from "vitest"
import {getUser, getUsuarioActivo} from '../../bases/05-Functions';

describe('Testing functions 1', () => {
    test('it should return an object', () => {
        const userTest = {
            uid: 'abc',
            username : 'Josequiloz'
        }

        const user = getUser()

        expect(user).toEqual(userTest);
    })
})

describe('Testing functions 2', () => {
    test('it should return another object', () => {

        const userNameTest = 'Josequiloz';
        const user = getUsuarioActivo(userNameTest)

        expect(user).toEqual({
            uid: 'ABC567',
            username: userNameTest
        });
    })
})