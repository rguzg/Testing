import { describe, expect, test } from '@jest/globals';
import { arrayColors, arrayFruits } from '../arrays';

describe('Pruebas de arreglos', () => {
    test('¿Contiene banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });

    test('No contiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });

    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });

    test('Comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});