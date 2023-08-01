/**
 * Este componente sirve como contenedor de un componente mas.
 * @param {component} children componente a contener 
 * @returns {component}
 */

function TodoList({ children }) {
    return (
        <ul>{children}</ul>
    )
}

export default TodoList