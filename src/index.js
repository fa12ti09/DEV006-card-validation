import validator from './validator.js'
// boton donar
const numeroTarjeta = document.getElementById('inputNumero')
const btnSubmit = document.getElementById('btnsubmit')

btnSubmit.addEventListener('click', function (event) {
  event.preventDefault()
  // validacion del input numero de tarjeta
  const numTarjeta1 = numeroTarjeta.value;

  if (numTarjeta1.length < 13 || numTarjeta1.length > 19) {
    alert('Tu tarjeta debe cumplir un rango de 13 a 19 digitos');
    return false;
  } 
  

  const luhn = validator.isValid(numeroTarjeta.value)
  const maskify = validator.maskify(numeroTarjeta.value)
  //alert(maskify) // Output: "#### #### #### 7454"
  //alert('Gracias por Donar');
  if (luhn === true) {
    alert('Tarjeta ' + maskify + 'Es Válida')
    alert('MUCHAS GRACIAS POR TU DONACIÓN')
  } else {
    alert('Tarjeta ' + maskify + ' Es Inválida')
    alert(' ERROR: Intente con otra tarjeta')
  }

 


})

//console.log(validator)
