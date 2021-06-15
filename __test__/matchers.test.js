import { describe, expect, test } from '@jest/globals'

describe('Comparadores comunes', () => {
    let user = {
        name: "Raúl",
        lastname: "Berraizaba"
    };

    let user2 = {
        name: "Raúl",
        lastname: "Berraizaba"
    };

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2)
    });

    // test('No son exactamente iguales', () => {
    //     expect(user).not.toEqual(user2)
    // });
});