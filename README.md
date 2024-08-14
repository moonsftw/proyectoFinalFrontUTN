Primeras complicaciones:
manejar la imagen del hero y de cada uno de los banner. Sin perder la forma de la imagen. Aún no logro resolver centrar el input de la imagen del Hero. Solo se centra en mobile.
Quiero que la sección de grupos y discover desaparezcan suavemente cuando achico la pantalla. Que no haga un "salto" la página
El hover de los botones del discover, lo había resuelto pero al verlo nuevamente veo que no cubre completamente el área del discover. Creo que se vería mejor si así lo hiciera.
El active de los botones del Discover está bien logrado. 

No sé que font usar

Quizás algo por mejorar es la parte de los botones de audio, settings del sector de perfil. Le puse que al hacer hover aumente de tamaño pero creo que esa no es la manera de hacerlo. Ya voy a buscar info sobre eso.

La parte del footer y algunos efectos de los botones me ayudé con este video: [Clone Discord](https://youtu.be/Z4cRxN1JPME?si=suad8vPBTdbuzkDq&t=3672)

Usé este video para hacer la animación:[Infinite Scroll](https://www.youtube.com/watch?v=Reu0hHbis5w)

El diseño original es de [Discord](https://discord.com/)

Para la animacion de la pagina de verificación me ayudé con el siguient [recurso](https://codesandbox.io/s/animacion-mostrarocultar-elementos-react-oyj7b?file=/src/App.js)

Para la animación de scroll usé el video de [Kevin Powell](https://youtu.be/UmzFk68Bwdk?si=8JuufQY34P0u-WRI)

Un problema que noto en la mitad del proyecto es que al no saber bien cual será mi producto final tiendo a repetir en todo. En el tema de los estilos sobre todo. Creo que podría hacer estilos globales y no repetir tantos estilos.

**clase 1**: npm create vite@latest
componentes siempre con mayuscula, archivos .jsx, ya que utilizan "sintaxis" tipo HTML, que ya no se llamar html sino JSX
archivos de funciones o datos usamos .js

**clase 2**:
solo un export default por archivo, y al importarlo no hace falta utilizar llaves, podemos darle cualquier nombre pero no es una buena práctica

y cuando usamos el export const, al importarlo en otro archivo debemos utilizar llaves y si quermos renombrarlo utilizamos la palabra reservada **as**

se puede utilizar el export cuando declaramos o al final del archivo con un export {nombre_funcion/variable}, lo importante es usar solo uno de los dos

si en un archivo no tenemos un export default podemos importar todo de ese archivo utilizando * por ejemplo: 
import * as matematicas from './matemticas'

matematicas.js
export const sumar = (a, b) => {
    return a + b
}

export const restar = (a, b) => {
    return a - b
}


# Orden:

En 

>[!IMPORTANT]
>
>ESTO ES UN PROYECTO PERSONAL PARA PRESENTAR EN LA DIPLOMATURA TAL, SOLO ME GUIÉ DEL DISEÑO DE LA PÁGINA DE DISCORD, NO BUSCO COPIAR CON MALAS INTENCIONES, SOLO SOY UN ESTUDIANTE QUE ADMIRA A DISCORD

