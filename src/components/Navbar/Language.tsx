import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import img from "../../assets/images/flag.svg"

const Language = () => {
    const [langIsOpen, setLangIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleButtonClick = () => {
        setLangIsOpen(!langIsOpen)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
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
            <button
                className="btn btnIcon"
                onClick={handleButtonClick}
            >
                <Image
                    src={img.src}
                    width={21}
                    height={21}
                    alt="Language"
                />
            </button>
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
