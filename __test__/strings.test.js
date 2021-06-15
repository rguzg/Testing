import { describe, expect, test } from '@jest/globals';

describe('Comprobar strings', () => {
    const texto = 'Un bonito texto 🙂';

    test('Debe contener el siguiente texto', () => {
        expect(texto).toMatch(/bonito/);
    });

    test("No debe conteneter el siguiente texto", () => {
        expect(texto).not.toMatch(/gato/);
    }); 

    test('Comprobar la longitud del texto', () => {
        expect(texto).toHaveLength(18);
    });
});