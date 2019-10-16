// Escribe la función `hasDuplicatedCharacters` que recibe una cadena de
// texto y determina si contiene caracteres duplicados.
// Debe devolver `true` si la cadena contiene caracteres duplicados y
// `false` en caso contrario.

const assert = require('assert');

const hasDuplicatedCharacters = aString => {
  // Solver here...
  let j = aString.length;

  for (let i = 0; i < aString.length/2; i++) {
    
      if(aString[i] === aString[j-1-i]){
        return true
      }
  } 
  return false
};

try {
  assert.equal(hasDuplicatedCharacters('elefante'), true,
    'Se esperaba encontrar caracteres duplicados.');
  assert.equal(hasDuplicatedCharacters(''), false,
    'Se encontraron caracteres duplicados inesperados.');
  console.log('✓ hasDuplicatedCharacters OK');
} catch (e) {
  console.log(e.message);
}
