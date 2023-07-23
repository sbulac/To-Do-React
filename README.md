**REACT.js**

# ¿Cómo funciona React?
   React es una libreria de JavaScript que nos srive para crear páginas en base a los *componentes,* estos componentes son reutilizables por lo que los podremos usar cuando queramos. Los archivos que lee *react* son de tipo _jsx_ (JavaScript XML). En *react* tenemos lo que son los componentes y los elementos, todo esto para por una "fabrica" de React que transforma todos nuestros archivos _jsx_ a HTML, CSS y JavaScript. Renderizando así todo el código que escribimos en nuestra página.

**Temario**

# 1. Componentes
   Hay una gran diferencia entre componentes y elementos. Los componentes son propios de *React* en cambio los elementos son propios de *HTML*. ¿Cómo se diferencian? Es muy fácil, si la primera letra de una "etiqueta" está en Mayúscula es porque es un `Componente` en cambio si el nombre de la "etiqueta" está completamente en minúscula es porque es un `Elemento`

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

# 4. El estado de React
   El *estado* de react básicamente es como una variable la cual nos sirve para poder renderizarla en nuestro componente, la diferencia que hay entre si usamos variables normales de JavaScript o el *estado* de react, es que cuando intentemos actualizar la variable para que se actualice en nuestra página, si usamos variables no se va a actualizar en la página solo se actualiza la variable, en cambio si usamos el *estado* se actualiza el estado y la página. Esto se debe a que hay alguien (por así decirlo) que revisa si cambia el *estado* y si hay un cambio se renderiza el componente de nuevo.

   Otro concepto a tener en cuenta de React es el *VirtualDOM* el cual es una copia del *DOM* que conocemos normalmente, el *virtualDOM* lo utiliza react para verificar los cambios que se hicieron en el código y revisa que tiene que actualizar o en este caso renderizar en el *virtualDOM* para posteriormente solo cambiar ese elemento de HTML en el *DOM.*

   Te podrías preguntar _¿cómo pueddes pasar estados de un componente a otro?_ y la pregunta es simple pero tienes que tener en cuenta algo. Solamente puedes pasar un *estado* de un componente `padre` a un componente `hijo` y no al revés, teniendo eso encuenta puedes crear un *estado* en un componente `padre` y pasárselo a todos los componentes `hijo` que queramos por medio de *props*.

# 5. Los estados derviados
   Básicamente los *estados derivados* son estados almacenados en variables a partir de estados creados con useState. Puede sonar confuzo pero es básicamente tomar una parte en específico de un estado para que la podamos utilizar en cualquier parte.