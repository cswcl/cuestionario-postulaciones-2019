// Corrija la función `doRegressiveCountAndLaunch` para que imprima un
// conteo regresivo desde 10 y al finalizar 'fire'. La separación temporal
// entre cada impresión debe ser de 1 segundo.
// Actualmente la función está rota: imprime 'fire' al principio y luego
// toda la cuenta sin espera entre número y número.

let n = 10;
const doRegressiveCountAndLaunch = callBack => {
  console.log(n)
  n -= 1;
  if (n == 0) {
    console.log('Fire');
  } else {

    setTimeout("doRegressiveCountAndLaunch()", 1000);


  }
}
console.log('Preparing for launch...');
doRegressiveCountAndLaunch(() => console.log('fire'));