var arr = prompt("Ingrese una cadena de texto a invertir");
var tarr = arr.length - 1;
var arrayInvertido = [];

while (tarr >= 0) {
   arrayInvertido.push(arr[tarr]);
   tarr--;
}

console.log(arrayInvertido);