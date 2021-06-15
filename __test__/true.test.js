import { describe, expect, test } from '@jest/globals';
import { isFalse, isNull, isTrue, isUndefined } from '../true';

// Agrupando tests segun lo que queramos probar

describe('Probar resultados nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    })
});

describe('Probar resultados verdaderos', () => {
    test('Verdadero', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('Probar resultados falsos', () => {
    test('Falso', () => {
        expect(isFalse()).toBeFalsy();
    });
});

describe('Probar resultados undefined', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});

describe('Probar resultados no verdaderos', () => {
    test('Falso o verdadero', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});