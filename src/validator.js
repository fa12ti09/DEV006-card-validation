const validator = {
  isValid:function(numeroTarjeta){ 
    //codigo de validar
   
    //  Convertir el número de la tarjeta a un array de dígitos
    const digitos = numeroTarjeta.split("").map(Number);
    
    //  Iterar sobre los dígitos, comenzando desde el penúltimo dígito y retrocediendo
    for (let i = digitos.length - 2; i >= 0; i -= 2) {
//  Multiplicar cada segundo dígito por 2
digitos[i] *= 2;
    
//  Si el resultado de la multiplicación es mayor o igual a 10, sumar los dígitos individuales
if (digitos[i] >= 10) {
digitos[i] = digitos[i] % 10 + Math.floor(digitos[i] / 10);
}
}
    
//  Sumar todos los dígitos
const sumaDigitos = digitos.reduce((total, digit) => total + digit, 0);
    
//  La tarjeta es válida si la suma de los dígitos es divisible por 10
if sumaDigitos % 10 === 0;
  
},
maskify:function(numeroTarjeta) {
// Obtener la longitud de la cadena de la tarjeta
const cardLength = numeroTarjeta.length;
      
// Si la longitud de la cadena de la tarjeta es menor o igual a 4, devolver la cadena original
 if (cardLength <= 4) {
return numeroTarjeta;
} else{  
// Reemplazar todos los caracteres excepto los últimos 4 con "#"
let mask = "#";
let maskedNumber = "";
// Contador for inicia en 0 hasta la posición 12
for (let i = 0; i < cardLength - 4; i++) {
maskedNumber = (maskedNumber[i]);
//console.log(maskedNumber);
maskedNumber + mask;

//console.log(maskedNumber);
//Devolver el número de tarjeta enmascarado
return maskedNumber;
}
//return maskedNumber + numeroTarjeta.substring(cardLength - 4); 
console.log(maskedNumber);
}
}

}
  
export default validator;










