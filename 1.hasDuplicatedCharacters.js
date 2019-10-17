// Escribe la función `hasDuplicatedCharacters` que recibe una cadena de
// texto y determina si contiene caracteres duplicados.
// Debe devolver `true` si la cadena contiene caracteres duplicados y
// `false` en caso contrario.

const assert = require('assert');

const hasDuplicatedCharacters = aString => {

    for (let i = 0; i <= aString.length; i++) {
        for (let j = i + 1; j <= aString.length; j++) {
            if (aString[j] === aString[i]) {
                return true;
            }

        }
    }
    return false;
}
        console.log(hasDuplicatedCharacters("elefante"))

try {
    assert.equal(hasDuplicatedCharacters('elefante'), true,
        'Se esperaba encontrar caracteres duplicados.');
    assert.equal(hasDuplicatedCharacters(), false,
        'Se encontraron caracteres duplicados inesperados.');
    console.log('✓ hasDuplicatedCharacters OK');
} catch (e) {
    console.log(e.message);
}
