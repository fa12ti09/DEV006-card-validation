const validator = {
  isValid: function (numeroTarjeta) {
    //  Convertir el número de la tarjeta a un array de dígitos
    const digitos = numeroTarjeta.split('').map(Number)

    //  Iterar sobre los dígitos, comenzando desde el penúltimo dígito y retrocediendo
    for (let i = digitos.length - 2; i >= 0; i -= 2) {
      //  Multiplicar cada segundo dígito por 2
      digitos[i] *= 2

      //  Si el resultado de la multiplicación es mayor o igual a 10, sumar los dígitos individuales
      if (digitos[i] >= 10) {
        digitos[i] = (digitos[i] % 10) + Math.floor(digitos[i] / 10)
      }
    }

    //Sumar todos los dígitos
    const sumaDigitos = digitos.reduce((total, digit) => total + digit, 0)

    //  La tarjeta es válida si la suma de los dígitos es divisible por 10
    if (sumaDigitos % 10 === 0) {
      //si el resto de 10 es igual a 0
      // alert('Tu tarjeta es Válida')
      return true
    } else {
      //alert('Error: Número de tarjeta invalido')
      return false
    }
  },
  maskify: function (numeroTarjeta) {
    // crea un nuevo array
    const maskedNumber = Array.from(numeroTarjeta)
    // bucle
    for (let i = 0; i <= numeroTarjeta.length; i++) {
      // se enmascara el numero de la posicion 0 al 12
      if (i < maskedNumber.length - 4) {
        maskedNumber[i] = '#'
      }
    }
    // devuelve el numero enmascarado
    return maskedNumber.join('')
  }
}

export default validator
