// import React, { useState } from "react"
"use client"
import { useGlobalContext } from "@/context/ThemeContext"
import "@/styles/modal.scss"

const Modal = () => {
    
    const { showModal } = useGlobalContext()
    
    return (
        <>
            {showModal && (
                <div className="modal">modal</div>
            )}
        </>
        
    )
}

export default Modal
