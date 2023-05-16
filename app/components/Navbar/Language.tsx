"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Button from "../Button"
import img from "../../assets/images/flag.svg"

const Language = () => {
    const [langIsOpen, setLangIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleButtonClick = () => {
        setLangIsOpen(!langIsOpen)
    }

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setLangIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <div
            className={`dropdown ${langIsOpen ? "open" : ""}`}
            ref={dropdownRef}
        >
            <Button
                className="btn"
                icon
                onClick={handleButtonClick}
            >
                <Image
                    src={img.src}
                    width={21}
                    height={21}
                    alt="Language"
                />
            </Button>
            <ul className="dropdownMenu">
                <li>
                    <a href="btn">English</a>
                </li>
                <li>
                    <a href="btn">German</a>
                </li>
                <li>
                    <a href="btn">Polish</a>
                </li>
            </ul>
        </div>
    )
}

export default Language
