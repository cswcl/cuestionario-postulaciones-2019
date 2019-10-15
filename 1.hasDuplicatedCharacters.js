// Escribe la función `hasDuplicatedCharacters` que recibe una cadena de
// texto y determina si contiene caracteres duplicados.
// Debe devolver `true` si la cadena contiene caracteres duplicados y
// `false` en caso contrario.

const assert = require('assert');

const hasDuplicatedCharacters = aString => {
  for (i = 0; i < aString.length / 2; i++) {
    for (j = aString.length; j > aString.length / 2; j--) {
      if (aString[i] === aString[j])
        return true
    }
  }
  return false
};

try {
  assert.equal(hasDuplicatedCharacters('elefante'), true,
    'Se encontraron caracteres duplicados inesperados.');
  assert.equal(hasDuplicatedCharacters('hola'), false,
    'Se esperaba encontrar caracteres duplicados.');
  console.log('✓ hasDuplicatedCharacters OK');
} catch (e) {
  console.log(e.message);
}
