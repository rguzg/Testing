import { describe, expect, test } from '@jest/globals';
import { numbers } from '../numeros';

describe('Comparar números', () => {
    test('Mayor que', () => {
        expect(numbers(2,2)).toBeGreaterThan(3);
    });

    test('Mayor o igual que', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });

    test('Menor que', () => {
        expect(numbers(2,2)).toBeLessThan(5);
    });

    test('Menor que o igual', () => {
        expect(numbers(2,2)).toBeLessThanOrEqual(5);
    });

    test("Números flotantes", () => {
        expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
    });
});