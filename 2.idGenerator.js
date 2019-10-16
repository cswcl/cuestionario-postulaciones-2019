// Implementa la funcion `idGenerator` de modo que se comporte
// de la siguiente manera:
//
// const firstGenerator = idGenerator();
// const secondGenerator = idGenerator();
// console.log(firstGenerator()); // imprime: 1
// console.log(firstGenerator()); // imprime: 2
// console.log(firstGenerator()); // imprime: 3
// console.log(secondGenerator()); // imprime: 1

const assert = require('assert');

const idGenerator = () => {
  //closures methods
 let idGen = 0; //init idGenerator in ZERO.
 return ()=> { return idGen+=1} // return anonymous f(x), idGen++
  
};

try {
  const firstGenerator = idGenerator();
  const secondGenerator = idGenerator();
  assert.equal(firstGenerator(), 1,
    'Falló firstGenerator en la primer llamada');

  assert.equal(firstGenerator(), 2,
    'Falló firstGenerator en la segunda llamada');

  assert.equal(firstGenerator(), 3,
    'Falló firstGenerator en la tercer llamada');

  assert.equal(secondGenerator(), 1,
    'Falló firstGenerator en la primer llamada');

  console.log('✓ idGenerator OK');
} catch (e) {
  console.log(e.message);
}
