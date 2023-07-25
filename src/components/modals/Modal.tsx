// import React, { useState } from "react"
"use client"
import { useGlobalContext } from "@/context/ThemeContext"
import "@/styles/modal.scss"

const Modal = () => {
    
    const { showModal } = useGlobalContext()
    return <div className="modal">modal / {showModal ? 'yes' : "mo"}</div>
}

export default Modal
