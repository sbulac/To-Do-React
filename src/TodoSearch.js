import React from "react"

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