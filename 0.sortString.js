// Escribe la función `sortString` que recibe una cadena de texto y
// devuelve una cadena de texto ordenada lexicográficamente

const assert = require('assert');

const sortString = aString => {
  // Solve here...
  return aString.split('') // convert to arr
  .sort() // sorting with arr prototype methods
  .join('') // return to string

};

try {
  assert.equal(sortString('Zaratustra'), 'Zaaarrsttu',
    'Se esperaba una ordenación distinta.');
  console.log('✓ sortString OK');
} catch (e) {
  console.log(e.message);
}
