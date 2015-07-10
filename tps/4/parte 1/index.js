var cadena = prompt("Ingrese una cadena de texto a invertir");
var cadenaInvertida = "";
var i = cadena.length;

for (i > 0; i --;) {
	cadenaInvertida = cadenaInvertida + cadena[i];
};

console.log(cadenaInvertida);