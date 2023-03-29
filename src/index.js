import validator from './validator.js';
// numero tarjeta
const numeroTarjeta = document.getElementById("inputNumero");
const btnSubmit = document.getElementById('btnsubmit')

btnSubmit.addEventListener("click", function (event) {
event.preventDefault()
    
console.log("Tarjeta Válida");
console.log(validator.isValid(numeroTarjeta.value));
alert("Gracias por Donar");
const maskedNumber = validator.maskify(numeroTarjeta.value);
console.log(maskedNumber); // Output: "#### #### #### 7454"

})





    



