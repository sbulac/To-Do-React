import { useState, useEffect } from "react"


/**
 * CustomHook para manejar el localStorage y el estado al mismo tiempo
 * @param {String} itemName el item que queremos manipular del localStorage
 * @param {Array} initialValue el valor inicial del item
 * @returns {Array} retorna un array con el estado del item y la funcion para actualizar el item y el localStorage
*/
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => {

            try {
                const localStorageItem = localStorage.getItem(itemName)

                let parsedItem

                if (!localStorageItem) {
                    // si en localStorage no existe un item === itemName creas un nuevo item con ese nombre y se inicia con initialValue
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    // si existe ese item en localStorage traelo y guardalo en parsedItem
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }

                setLoading(false)

            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }, 1500);
    }, [])



    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
        // esta funcion actualiza el localStorage y el useState "item" 
    }

    return { item, saveItem, loading, error }
}

export default useLocalStorage