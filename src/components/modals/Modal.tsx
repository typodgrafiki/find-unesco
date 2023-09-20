// import React, { useState } from "react"
"use client"
import { useEffect } from "react"
import { useGlobalContext } from "@/context/ThemeContext"
import "@/styles/modal.scss"

const Modal = () => {
    
    const { showModal, setShowModal } = useGlobalContext()
    
    const handleEsc = (event: any) => {
        if (event.type === "click" || event.key === "Escape") {
            setShowModal({
                open: false,
                title: "",
                description: "",
                image: ""
            });
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
            {showModal.open && (
                <>
                    <div className="shadowModal"></div>
                    <div className="modal">
                        <div className="close" onClick={handleEsc}>close</div>
                        <div className="image">
                            {showModal.image}
                        </div>
                        <h3 className="modalTitle">
                            {showModal.title}
                        </h3>
                        <div className="modalContent">
                            {showModal.description}
                        </div>
                        {/* <div className="modalFooter">
                            <a className="btn btnPrimary">
                                Zapisz
                            </a>
                        </div> */}
                    </div>
                </>
            )}
        </>        
    )
}

export default Modal
