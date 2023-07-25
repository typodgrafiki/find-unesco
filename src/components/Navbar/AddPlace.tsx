"use client"
import { useGlobalContext } from "@/context/ThemeContext"

const AddPlace = () => {
    
    const { showModal, setShowModal } = useGlobalContext()
    
    const handlerAddPlace = () => {
        setShowModal(!showModal)
    }

    return (
        <button
            className="btn btn-add-place"
            onClick={handlerAddPlace}
        >
            Add place
        </button>
    )
}

export default AddPlace
