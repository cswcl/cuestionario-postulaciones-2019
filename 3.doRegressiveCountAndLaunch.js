// Corrija la función `doRegressiveCountAndLaunch` para que imprima un
// conteo regresivo desde 10 y al finalizar 'fire'. La separación temporal
// entre cada impresión debe ser de 1 segundo.
// Actualmente la función está rota: imprime 'fire' al principio y luego
// toda la cuenta sin espera entre número y número.

window.onload = doRegressiveCountAndLaunch;
let totalTime = 10;
function doRegressiveCountAndLaunch() {
  console.log(totalTime)
  if (totalTime == 1) {
    console.log("fire")
  } else {
    totalTime -= 1; setTimeout("doRegressiveCountAndLaunch()", 1000);
  }
}
console.log('Preparing for launch...');