"use client"
import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Button from "../Button"
import img from "../../assets/images/search.svg"

interface IFormProps {
    continents: string[]
    cities: string[]
    types: string[]
}

const Search = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    const [formData, setFormData] = useState<IFormProps>({
        continents: [],
        cities: [],
        types: [],
    })

    const handlePlacesChange = (event: MouseEvent | KeyboardEvent) => {
        const { name, value, checked } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: checked
                ? [...prevFormData[name], value]
                : prevFormData[name].filter((item) => item !== value),
        }))
    }

    const handleSubmit = (event: MouseEvent | KeyboardEvent) => {
        event.preventDefault()
        console.log("Miasta:", cities)
        console.log("Rodzaje:", types)
    }

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpenSearch(false)
            }
        }

        document.addEventListener("keydown", handleEsc)

        return () => {
            document.removeEventListener("keydown", handleEsc)
        }
    }, [])

    return (
        <>
            <form className="searchForm flex">
                <input
                    ref={inputRef}
                    placeholder="Search for a place..."
                    type="text"
                    className="formControl"
                    onFocus={() => setOpenSearch(true)}
                />
                <Button
                    icon
                    dark
                    className="btn"
                >
                    <Image
                        src={img.src}
                        width={18}
                        height={18}
                        alt="search"
                    />
                </Button>
            </form>

            {openSearch && (
                <SearchDropdown
                    formData={formData}
                    handlePlacesChange={handlePlacesChange}
                    handleSubmit={handleSubmit}
                />
            )}
        </>
    )
}

const SearchDropdown = (handlePlacesChange, handleSubmit) => {
    return (
        <form
            className="dropdownMenu show"
            onSubmit={handleSubmit}
        >
            <ul>
                <li>
                    Europa
                    <ul>
                        <li>Polska</li>
                        <li>Niemcy</li>
                        <li>Hiszpania</li>
                    </ul>
                </li>
                <li>
                    Azja
                    <ul>
                        <li>Japonia</li>
                        <li>Tajlandia</li>
                    </ul>
                </li>
            </ul>
            <div>
                <input
                    type="checkbox"
                    name="cities"
                    value="Poznań"
                    onChange={handlePlacesChange}
                />
                <input
                    type="checkbox"
                    value="Przyroda"
                    name="types"
                    onChange={handlePlacesChange}
                />
                <input
                    type="checkbox"
                    value="Góry"
                    name="types"
                    onChange={handlePlacesChange}
                />
            </div>
            <div>
                <Button>Wyczyść</Button>
                <Button type="submit">Szukaj</Button>
            </div>
        </form>
    )
}

export default Search
