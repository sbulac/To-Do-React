/**
 * Este componente sirve para filtrar los to-dos a partir del useState que se le pasa por parametros.
 * @param {state} searchValue valor del useState "searchValue".
 * @param {state} setSearchValue actualizador del useState "searchValue".
 * @returns {component}
 */

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <input
            placeholder="Filtrar"
            value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value)
            }} />
    )
}

export default TodoSearch