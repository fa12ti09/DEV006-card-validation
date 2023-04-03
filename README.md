
# Card Validaction FATIMA

# Descripción
En este proyecto vamos a realizar una pagina de donaciones voluntarias para los dafnificados de turquia y siria por el temblor ocurrio en el mes de febrero. Esta pagina te dara las opciones para poder realizar tu donacion efectivamente y lo haremos por medio una validacion de una tarjeta de crédito o débito haciendo un algoritmo de Luhn a continuacion te explico un poco sobre el.

El algoritmo de Luhn, también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

El algoritmo sera nuestra herramienta necesaria para poder saber si la tarjeta es válida o inválida.


A continuación un video de Michelle que te lleva a través del algoritmo de Luhn
y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala
con detenimiento y sigue sus consejos! :)

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)
[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)


## Funcionalidades

La pagina te pedira unos datos necesarios por ejemplo:
 1. Tu numero de tarjeta de 13 a 19 digitos
 2. Nombre y Apellido
 3. Aportacion voluntaria
 4. Expiracion de la tarjeta
 5. CVV
  Una vez completado estos requisitos podras seleccinar el boton "DONAR"

  Si tu tarjeta contiene una numeracion válida la pagina te mandara una alerta que te dira "Tu tarjeta es válida , en seguida te volvera a mandar una segunda alerta pero esta dira " Muchas gracias por tu donacion"

  De lo contrario si tu numero de tarjeta no es valido 
  te mandara una alerta que dira " Tarjeta inválida"
  en seguida te volvera a lanzar una segunda alerta que dira " ERROR intente con otra tarjeta"

  Aparte de la validacion de tu numero de tarjeta por motivos de seguridad la pagina te va a enmascarar los digitos de tu tarjeta menos los ultimos 4
   No te dejará realizar la donacion si uno de los campos esta vacio.
 



## Diseño
En este proyecto se visualiza muy sencilla la parte del llenado del formulario para evitar complicaciones o dudas al momento de ingresar los datos asi evitaremos  fraudes u otros problemas con aportacion de datos.

 
## Construido con lenguajes:

°[HTML]

°[CSS]

°[JAVASCRIP]



## Créditos
Este proyecto fue creado por [FATIMA LIVIER QUIÑONES GUTIERREZ]
Si tiene alguna sugerencia o duda puedo contactarme por medio de slack encontrandome con mi nombre completo. 

 ## Herramientas de apoyo

Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

 CSS

Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

 Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)


