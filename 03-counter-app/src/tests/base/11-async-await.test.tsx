import {describe, expect, test} from "vitest"
import {getImagen} from '../../bases/11-async-await';

describe('testing, async-await with Fetch', () => {
    test('it should return an url of the image', async () => {

        const url = await getImagen();
        expect(url.includes('https')).toBe(true)
    });
})

