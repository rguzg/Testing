import { sumar, multiplicar, restar, dividir } from '../maths'

// Al correr los test, Jest pone lo siguiente en el objeto global, pero de todos modos las cosas se pueden importar a manita
import { describe, expect, test } from '@jest/globals'

// Test suite: Cálculos matemáticos
// Describe crea una test suite AKA un grupo de tests
describe("Calculos matemáticos", () => {
    // Test basicamente verifica que TestFn retorne true
    test('Prueba de sumas', () => {
        // No se recomeinda usar toBe con floating point (2.99 != 2.999)
        expect(sumar(1,1)).toBe(2);
    });

    test('Prueba de multiplicar', () => {
        expect(multiplicar(2,2)).toBe(4);
    });

    test('Prueba de resta', () => {
        expect(restar(1,1)).toBe(0);
    });

    test('Prueba de división', () => {
        expect(dividir(1,1)).toBe(1);
    });
});