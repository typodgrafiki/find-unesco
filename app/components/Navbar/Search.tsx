"use client"
import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Button from "../Button"
import listPlaces from "@/app/utils/listPlacesUnesco.json"
import img from "../../assets/images/search.svg"

interface IFormProps {
    cities: string[]
    types: string[]
}

const Search = () => {
    const formRef = useRef<HTMLFormElement | null>(null)
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    const [formData, setFormData] = useState<IFormProps>({
        cities: [],
        types: [],
    })

    const handlePlacesChange = (event: MouseEvent | KeyboardEvent) => {
        const { name: typesName, value, checked } = event.target

        console.log(typesName, value, checked)

        setFormData((formData) => {
            if (checked) {
                if (!formData[typesName].includes(value)) {
                    return {
                        ...formData,
                        [typesName]: [...formData[typesName], value],
                    }
                }
            } else {
                return {
                    ...formData,
                    [typesName]: formData[typesName].filter(
                        (item) => item !== value
                    ),
                }
            }
            return formData
        })
    }

    const handleSubmit = (event: MouseEvent | KeyboardEvent) => {
        event.preventDefault()
        console.log("Miasta:", formData.cities.toString())
        console.log("Typy:", formData.types.toString())

        // router.push({
        //     pathname: "/search",
        //     query: {
        //         type: formData.types.toString(),
        //         location: formData.cities.toString(),
        //     },
        // })
    }

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (
                event.key === "Escape" ||
                (formRef.current && !formRef.current.contains(event.target))
            ) {
                setOpenSearch(false)
            }
        }

        document.addEventListener("keydown", handleEsc)
        document.addEventListener("mousedown", handleEsc)

        return () => {
            document.removeEventListener("mousedown", handleEsc)
            document.removeEventListener("keydown", handleEsc)
        }
    }, [])

    return (
        <>
            <form
                className="searchForm flex"
                ref={formRef}
                onSubmit={handleSubmit}
            >
                {/* <input
                    ref={inputRef}
                    placeholder="Search for a place..."
                    type="text"
                    className={
                        openSearch ? "formControl blocked" : "formControl"
                    }
                    onFocus={() => setOpenSearch(true)}
                    value={formData.cities.map((element) => " " + element)}
                /> */}

                <div
                    className={
                        openSearch ? "formControl blocked" : "formControl"
                    }
                    onClick={() => setOpenSearch(true)}
                >
                    {formData.cities[0]
                        ? formData.cities.map((element) => element + ", ")
                        : "Search for a place..."}
                </div>

                <Button
                    icon
                    dark
                    className="btn btn-icon"
                >
                    <Image
                        src={img.src}
                        width={18}
                        height={18}
                        alt="search"
                    />
                </Button>
                {openSearch && (
                    <SearchDropdown handlePlacesChangeFn={handlePlacesChange} />
                )}
            </form>
        </>
    )
}

const SearchDropdown = ({ handlePlacesChangeFn }) => {
    return (
        <div className="dropdownMenu show">
            <div className="rowCountries">
                {listPlaces.places.map((element) => (
                    <ListPlacesLi
                        element={element}
                        key={Object.keys(element)}
                        handlePlacesChangeFn={handlePlacesChangeFn}
                    />
                ))}
            </div>
            <div className="rowTypes flex flexCenter">
                {listPlaces.types.map((element) => (
                    <div key={element}>
                        <input
                            id={element}
                            type="checkbox"
                            name="types"
                            value={element}
                            onChange={handlePlacesChangeFn}
                            hidden
                        />
                        <label
                            className="btn"
                            htmlFor={element}
                        >
                            IMG {element}
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <Button
                    type="submit"
                    className="btn"
                    primary
                >
                    Szukaj
                </Button>
            </div>
        </div>
    )
}

const ListPlacesLi = ({ element, handlePlacesChangeFn }) => {
    const countriesList: string[] = Object.values(element)[0]

    return (
        <>
            <div>
                <h3>{Object.keys(element)}</h3>
                <ul>
                    {countriesList.map((element) => (
                        <li key={element}>
                            <input
                                id={element}
                                type="checkbox"
                                name="cities"
                                value={element}
                                onChange={handlePlacesChangeFn}
                                hidden
                            />
                            <label
                                className="btn"
                                htmlFor={element}
                            >
                                {element}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


export default Search
