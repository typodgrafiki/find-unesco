// import React, { useState } from "react"
"use client"
import { useEffect } from "react"
import { useGlobalContext } from "@/context/ThemeContext"
import "@/styles/modal.scss"

const Modal = () => {
    
    const { showModal, setShowModal } = useGlobalContext()
    
    const handleEsc = (event: any) => {
        if (event.type === "click" || event.key === "Escape") {
            setShowModal(false)
        }
    }
    
    useEffect(() => {
        document.addEventListener("keydown", handleEsc)
        return () => {
            document.removeEventListener("keydown", handleEsc)
        }
    }, [])
    
    return (
        <>
            {showModal && (
                <>
                    <div className="shadowModal"></div>
                    <div className="modal">
                        <div className="close" onClick={handleEsc}>close</div>
                        <h3 className="modalTitle">
                            Title
                        </h3>
                        <div className="modalContent">
                            Modal content
                        </div>
                        <div className="modalFooter">
                            <a className="btn btnPrimary">
                                Zapisz
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>        
    )
}

export default Modal
