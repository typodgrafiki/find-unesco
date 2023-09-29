// import React, { useState } from "react"
"use client"
import { useEffect } from "react"
import Image from "next/image"
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
                image: "",
                action: "",
                link: "",
                category: "",
                country: [],
            })
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
                    <div
                        className="shadowModal"
                        onClick={handleEsc}
                    ></div>
                    <div className="modal productBox">
                        <div
                            className="close pointer"
                            onClick={handleEsc}
                        >
                            close
                        </div>
                        {showModal.image && (
                            <div className="image">
                                <Image
                                    src={showModal.image}
                                    width={200}
                                    height={100}
                                    alt={showModal.title}
                                />
                            </div>
                        )}
                        <h3 className="modalTitle name">{showModal.title}</h3>
                        <div className="modalContent">
                            <div className="description">
                                {showModal.description}
                            </div>
                            <div className="category">
                                <b>{showModal.category}</b>
                            </div>
                            <div className="country">
                                <ul className="flex labels">
                                    {showModal.country?.map((el, index) => (
                                        <li
                                            className="country"
                                            key={el + "_" + index}
                                        >
                                            {el}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="map">map</div> */}
                            <div className="link">
                                <a
                                    href={showModal.link}
                                    target="_blank"
                                >
                                    {showModal.link}
                                </a>
                            </div>
                        </div>
                        <div className="modalFooter">
                            <a
                                className="btn btnDefault pointer"
                                onClick={handleEsc}
                            >
                                Close
                            </a>
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
