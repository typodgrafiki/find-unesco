"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Button from "../Button"
import flag from "../../assets/images/flag.svg"

interface IDropdownProps {
    children: React.ReactNode
    label: string
    dropdownEl: Array
    lang?: boolean
}

const DropdownLi = ({ data }) => {
    return (
        <li>
            <a href={data.url}>{data.label}</a>
        </li>
    )
}

const Dropdown: React.FC<IDropdownProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleButtonClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
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
            <Button
                className="btn"
                onClick={handleButtonClick}
                icon={data.lang ? true : false}
            >
                {data.lang ? (
                    <Image
                        src={flag.src}
                        width={21}
                        height={21}
                        alt="Language"
                    />
                ) : (
                    data.label
                )}
            </Button>
            <ul className="dropdownMenu">
                {data.options.map((item, index) => (
                    <DropdownLi
                        data={item}
                        key={index}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Dropdown
