"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import flag from "@/assets/images/flag.svg"
import { IDropdownProps, IDropdownLiProps } from "@/utils/dropdownData"

const DropdownLi: React.FC<IDropdownLiProps> = ({ url, label }) => {
    return (
        <li>
            <a href={url}>{label}</a>
        </li>
    )
}

const Dropdown: React.FC<IDropdownProps> = ({ label, options, lang }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleButtonClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false)
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
            className={`dropdown ${isOpen ? "open" : ""}`}
            ref={dropdownRef}
        >
            <button
                className={lang ? "btn btnIcon" : "btn"}
                onClick={handleButtonClick}
            >
                {lang ? (
                    <Image
                        src={flag.src}
                        width={21}
                        height={21}
                        alt="Language"
                    />
                ) : (
                    label
                )}
            </button>
            <ul className="dropdownMenu">
                {options.map((item) => (
                    <DropdownLi
                        url={item.url}
                        label={item.label}
                        key={item.label}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Dropdown
