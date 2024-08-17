>[!IMPORTANT]
>
>ESTO ES UN PROYECTO PERSONAL PARA PRESENTAR EN LA DIPLOMATURA TAL, SOLO ME GUIÉ DEL DISEÑO DE LA PÁGINA DE DISCORD, NO BUSCO COPIAR CON MALAS INTENCIONES, SOLO SOY UN ESTUDIANTE QUE ADMIRA A DISCORD

>[!NOTE]
># VER
>[Improve your form validation hints without JS - Kevin Powell](https://youtube.com/watch?v=s2ThIxm7FyA&t=20s)


[Como utilizar markdown](https://experienceleague.adobe.com/es/docs/contributor/contributor-guide/writing-essentials/markdown#:~:text=En%20Markdown%2C%20un%20p%C3%A1rrafo%20no,text%20is%20**bold**.)

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

## clase 1: npm create vite@latest
componentes siempre con mayuscula, archivos .jsx, ya que utilizan "sintaxis" tipo HTML, que ya no se llamar html sino JSX
archivos de funciones o datos usamos .js

## clase 2:
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

props.children: código que irá dentro del componente que estamos creando

metodos avanzados: .map(() => {})

html en js no existe, es un jsx

# Orden:

En [NotFound.jsx](./src/Pages/NotFound/NotFound.jsx) está la logica de no encontré ese link

## clase 3
Desestructuración
key en los map
se puede hacer un fetch a archivos json locales
renderizado condicional { condicion ? verdadero : falso} (esto es un operador ternario)
{ condicion && mostrar_solo_si_la_condicion_es_verdadera } (esto se conoce como operador corto circuito)

## clase 4 React [estados](https://zoom-fepp.s3.amazonaws.com/81889724473/81889724473-meeting-b2d634a7-2b3a-496c-be9f-878003f47d49.mp4) 55:11

useState retorna un array por eso lo desestructuramos para declararlo
los estados son inmutables, para modificarlo usamo la funcion (set..)
const [ valorInicial, fnModificarValorInicial ] = useState(valor)
al usar la fnModificarValorInicial el componente donde se creo el estado se re-renderiza junto con sus "hijos"

propiedades hidden={condicion} y disabled={condicion}, creo que el disabled funciona solo con button y cuando no tiene ningúne stilo. y el hidden no sé bien como funciona, porque a veces desaparece y a veces no

formSchema, hice el form con map tanto el de login como el register e hice un component con la prop formContent
...formValues  clonar el estado inicial, que no es lo mismo que el spread operator que sirve para extender

# Clase 5 - React Router

npm i react-router-dom

<BrowserRouter>
    <Routes>
        <Route path='' element={} />
    </Routes>
</BrowserRouter>

<Link></Link> es mejor usarlo ya que no hay que renderizar el componente completo, usa renderizado condicional, es mucho más economico que usar el anchor <a></a>

path='/detail/:producto_id' esto es un parámetro de búsqueda

useParams()  

# Clase 5 - React Contenxt
const navigation = useNavigate() para redireccionar
navigation("/")

import { createContext, useContext } from "react";

const GlobalContext = createContext();

# Clase 6 - Manejo de formularios

Errores en formulario, diccionario de errores

# Clase 7 - Context con localstorage

renderizado condicional

new FormData(), lo usamos para recopilar la info del form ver uso en [handleCreateUsuario](./src/Context/GlobalContext.jsx)

valores random para id >>> librería npm i uuid
import { v4 as uuid } from 'uuid'
const nuevo_id = uuid();

npm i framer-motion [developedbyed](https://www.youtube.com/watch?v=S4HYwsBRpRs)

Dark mode

[Code Complete](https://www.youtube.com/watch?v=sy-rRtT84CQ)
npm install use-local-storage (para ver las preferencias del sistema del usuario)
# Clase 8 - Use effects - [Vercel](https://d1lb3lf90ja1l2.cloudfront.net/81889724473/81889724473-meeting-db7dc408-1d06-4949-b55c-4aee87c16c88.mp4) 32:59



# Clase 9 - Repaso final

Libreria Sweetalert2 > npm install sweetalert2