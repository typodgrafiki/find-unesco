"use client"
import { useGlobalContext } from "@/context/ThemeContext"
import "@/styles/modal.scss"

const Loading = () => {
    const { loading } = useGlobalContext()

    if (loading) {
        return (
            <div className="loading">
                <div className="loader"></div>
            </div>
        )
    } else {
        return null
    }
}

export default Loading
