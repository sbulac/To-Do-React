# Aprendiendo React.js

# ¿Cómo funciona React?

   React es una libreria de JavaScript que nos srive para crear páginas en base a los **componentes,** estos componentes son reutilizables por lo que los podremos usar cuando queramos. Los archivos que lee **react** son de tipo _jsx_ (JavaScript XML). En **react** tenemos lo que son los componentes y los elementos, todo esto para por una "fabrica" de React que transforma todos nuestros archivos _jsx_ a HTML, CSS y JavaScript. Renderizando así todo el código que escribimos en nuestra página.

# 1. Componentes

   Hay una gran diferencia entre componentes y elementos. Los componentes son propios de **React** en cambio los elementos son propios de **HTML**. ¿Cómo se diferencian? Es muy fácil, si la primera letra de una "etiqueta" está en Mayúscula es porque es un `Componente` en cambio si el nombre de la "etiqueta" está completamente en minúscula es porque es un `Elemento`

   Otra clara diferencia es que el componente es una función:
   `const MiComponente = () => { código }`

# 2. Props

   Los props son como los parámetros pero aún así hay una gran diferencia, si se le ponen a un `Elemento` serían parámetros como por ejemplo no _ClassName_ o _placeholder_. A diferencia de los props estos son únicamente para los `Componentes`, la estructura sería más o menos así:

   `const MiComponente = (props) => { código }`

   Esto nos facilita pasar información de padre a hijo para que este haga la página más dinámicas y no se repita la información.

# 3. Eventos de React

   Tenemos diversos eventos en React y con esto podemos lograr grandes cosas. Aquí te dejo dos de los eventos más usados:
   **onClick:** Este evento lo que hace es estar pendiente cuando se le haga click al componente, el elemento más usado para captar este tipo de eventos es el `button`
   **onChange:** Este evento lo que hace es estar pendiente cuando haya un cambio en el componente, el elemento más usado para captar este tipo de eventos es el `input`

# 4. El estado de React (useState)

   El **estado de react** básicamente es como una variable la cual nos sirve para poder renderizarla en nuestro componente, la diferencia que hay entre si usamos variables normales de JavaScript o el **estado** de react, es que cuando intentemos actualizar la variable para que se actualice en nuestra página, si usamos variables no se va a actualizar en la página solo se actualiza la variable, en cambio si usamos el **estado** se actualiza el estado y la página. Esto se debe a que hay alguien (por así decirlo) que revisa si cambia el **estado** y si hay un cambio se renderiza el componente de nuevo.

   Otro concepto a tener en cuenta de React es el **VirtualDOM** el cual es una copia del **DOM** que conocemos normalmente, el **virtualDOM** lo utiliza react para verificar los cambios que se hicieron en el código y revisa que tiene que actualizar o en este caso renderizar en el **virtualDOM** para posteriormente solo cambiar ese elemento de HTML en el **DOM.**

   Te podrías preguntar _¿cómo pueddes pasar estados de un componente a otro?_ y la pregunta es simple pero tienes que tener en cuenta algo. Solamente puedes pasar un **estado** de un componente `padre` a un componente `hijo` y no al revés, teniendo eso encuenta puedes crear un **estado** en un componente `padre` y pasárselo a todos los componentes `hijo` que queramos por medio de **props**.

# 5. Los estados derviados

   Básicamente los **estados derivados** son estados almacenados en variables a partir de estados creados con useState. Puede sonar confuzo pero es básicamente tomar una parte en específico de un estado para que la podamos utilizar en cualquier parte.

# 6. Iconos en react

   Podemos utilizar diferentes herramientas para implementar iconos en react. La herramienta que estaremos utilizando para implementar iconos en nuestra aplicación es: `react-icons`.

   **Página de react-icons (icons):** <https://react-icons.github.io/react-icons/icons?name=ti>
   **Página de react-icons (npm):** <https://www.npmjs.com/package/react-icons>

# 7. Local Storage

   El **localStorage** es básicamente un espacio en memoria en el navegador que se almacena localmente en el dispositivo del usuario, apesar de que el usuario haya cerrado la página, o el navegador o haya apagado el dispositivo la información almacenada en el **localStorage** se mantendrá. El localStorage utiliza una estructura de **clave - valor.** Para empezar a manipular el **localStorage** podemos utilizar estos métodos:

   `localStorage.getItem( ... )` Este método sirve para obtener un elemento del localStorage

   `localStorage.setItem( clave, elemento a ingresar)` Este método sirve para agregar un nuevo elemento **clave - valor**

   Sin embargo hay que tener ciertas "reglas" en cuenta como por ejemplo que el **localStorage** solo almacena _Strings_ esto se resuelve con el método de `JSON` _Stringify_ de la siguiente manera:

   `JSON.stringify(elemento)`

   Ahora si accedemos al localSotrage el resultado será un _String_ para poder desconvertirlo usamos el métoddo de `JSON` _parse_ de la siguiente manera:

   `JSON.parse(elemento)`

# 8. Custom Hooks

   Como su nombre lo indica son son **Hooks** customizable o por su traducción personalizables, _¿Qué son los hooks?_ Los **hooks** son funcionalidades para utilizar el estado y otras características de _React._ Básicamente condigo de JavaScript el cual podemos reutilizar en nuestros componentes. _React_ tiene sus propios **hooks** como por ejemplo: `useState`, `useEffect`, `useContext`, `useMemo`, etc. Sin embargo podemos crear nuestros propios **hooks** lo que sería un `useCustomHook`.

# 9. ¿Cómo organizar un proyecto de React.js?

   Realmente **hay muchas formas de organizarlo**, puedes organizarlo por _componentes_, por _utilidad_, por un millón de cosas, sin embargo esta bajo **tu criterio** cómo organizarlo. React al ser una libreria la cual se puede implementar a un código ya escrito por decirlo de una manera, deja la organización al criterio del desarrollador, a diferencia de otros frameworks que ya tienen una estructra dija como Vue, Next, etc.

   Aquí hay un blog donde puedes investigar unas maneras de como organizar el proyecto: <https://reboot.studio/blog/es/estructuras-organizar-proyecto-react>

   la estructura que utilizamos en este proyecto es por componentes, cada componente de la página tiene su propia carpeta donde se encuentra todo lo relacionado a ese componente, sin embargo tenemos otra carpeta llamada `hooks` donde almacenamos nuestro custom hook.

# 10. Los efectos de React (useEffect)

   Los **efectos de react** son un método el cual nos ayuda a controlar el problema de la **lógica pesada**, pero ¿Qué quiere decir eso? Recordemos el concepto de los **estados** o **useState** y es que cada vez que cambia el **estado** toda la página se vuelve a renderizar (se ejecuta todo el código de nuevo) por lo que se volvería a ejecutar nuestra **lógica pesada** por ende tendríamos una mala experiencia de usuario, digamos que toda nuestra **lógica pesada** se demora en ejecutarse **7s** así que cada vez que cambia el **estado** tenemos que esperar esos **7s** _(solo de la lógica pesada)_ ahí es donde entra los **efectos** o **useEffect.**

   Tenemos el siguiente ejemplo:

   ```
      import { useState } from "react"

      function App() {
         console.log("Log #1")   // 1s
         console.log("Log #2")   // 7s
         console.log("Log #3")   // .5s
         const [ estado, setEstado ] = useState(true)
         return(
            <>
            {/* Componente A */}
            </>
         )
      }
   ```

   Supongamos que cada uno de esos `console.log()` se demora el timepo del comentario que tienen al lado, en total son 8.5s, ahora cada vez que un **estado** se actualiza toda la página se debe de renderizar otra vez, por lo que se puede decir que cada vez que un **estado** se actualiza la se demora 8.5s en ejecutar todo de nuevo. Sin embargo si ejecutamos el siguiente código:

   ```
      import { useState, useEffect } from "react"

      function App() {
         console.log("Log #1")   // 1s
         useEffect(() => {
            console.log("Log #2")   // 7s
         }, [])
         console.log("Log #3")   // .5s
         const [ estado, setEstado ] = useState(true)
         return(
            <>
            {/* Componente A */}
            </>
         )
      }
   ```

   Lo que va a pasar será que se ejecutaran nuestos `console.log()` #1, #3 y #2 en ese orden, ya que primero se ejecutará todo el código y al final el **useEffect** y ahora al cambiar de **estado** solo se ejecutarán los `console.log()` #1 y #3 por lo que se puede decir que al iniciar la página se demora en cargar *8.5s* pero si un **estado** cambia la página se demoraría en cargar solo *1.5s*.