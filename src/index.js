import validator from './validator.js'
// numero tarjeta
const numeroTarjeta = document.getElementById('inputNumero')
const btnSubmit = document.getElementById('btnsubmit')

btnSubmit.addEventListener('click', function (event) {
  event.preventDefault()

  //console.log('Validando Tarjeta')
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
