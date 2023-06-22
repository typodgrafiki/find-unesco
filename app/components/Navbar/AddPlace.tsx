"use client"

const AddPlace = () => {
    const handlerAddPlace = () => {
        console.log("open modal")
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
