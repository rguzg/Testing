import { describe, expect, test } from '@jest/globals';
import { callbackHell } from "../callback";

describe('Probando un callback', () => {
    // Un test se completa cuando el callback que recibe test como argumento se termina de ejecutar. Si se está trabajando con cosas asíncronas
    // esto no funcionaría, porqué la función retornaría antes de que se recibiera el resultado de la función asíncrona.
    // test tiene un overload donde al callback se le pasa la función done. Al utilizar este overload, el test no se va a completar hasta
    // que se llame a done(), resolviendo el problema de realizar test asíncronos

    // Todo esto se vuelve más fácil si en lugar de utilizar callbackas para manejar cosas asíncronas se utilizan promesas y async/await

    // Para más información: https://jestjs.io/docs/asynchronous
    test("Callback", (done) => {
        function otherCallback(data){
            expect(data).toBe('Hola JavaScript');
            done();
        }

        callbackHell(otherCallback);
    })
});