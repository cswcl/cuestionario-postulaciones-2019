// Corrija la función `doRegressiveCountAndLaunch` para que imprima un
// conteo regresivo desde 10 y al finalizar 'fire'. La separación temporal
// entre cada impresión debe ser de 1 segundo.
// Actualmente la función está rota: imprime 'fire' al principio y luego
// toda la cuenta sin espera entre número y número.

const doRegressiveCountAndLaunch = async () => {
   for (let n = 10; n > 0; --n) {
     await new Promise ((resolve, reject) => 
     {setTimeout(() => resolve(console.log(n)),1000);
  }) 
}
}
console.log('Preparing for launch...');
doRegressiveCountAndLaunch()
.then(res =>{
  setTimeout(() => (console.log('fire')),1000);
  })
