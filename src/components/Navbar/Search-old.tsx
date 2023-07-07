"use client"
import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import listPlaces from "@/lib/listPlacesUnesco.json"
import img from "@/assets/images/search.svg"
import { useRouter } from "next/navigation"

// interface IFormProps {
//     locations: string[]
//     types: string[]
// }

const categories = [...new Set(listPlaces.map(item => item.category))];
const countries = [...new Set(listPlaces.map(item => item.states_name_en))];

const Search = () => {
    
    console.log(categories)
    
    
    const formRef = useRef<HTMLFormElement | null>(null)
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    const [formData, setFormData] = useState<IFormProps>({
        locations: [],
        types: [],
    })

    const router = useRouter()

    const handlePlacesChange = (event: MouseEvent | KeyboardEvent) => {
        const { name: typesName, value, checked } = event.target

        // console.log(typesName, value, checked)

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
        // console.log("Kraje:", formData.locations.toString())
        // console.log("Typy:", formData.types.toString())

        const url = () => {
            const returnLocations: string | null = (() => {
                if (formData.locations[0]) {
                    const location = formData.locations.toString()
                    return `locations=${location}`
                } else {
                    return ""
                }
            })()

            const returnTypes: string | null = (() => {
                if (formData.types[0]) {
                    const type = formData.types.toString()
                    return `types=${type}`
                } else {
                    return ""
                }
            })()

            const result: string = (() => {
                const both: string | null = (() => {
                    return returnLocations && returnTypes ? "&" : ""
                })()

                return `/search?${returnLocations}${both}${returnTypes}`
            })()

            return result
        }

        router.push(url())

        setOpenSearch(false)
        setFormData({
            locations: [],
            types: [],
        })
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
                <div
                    className={
                        openSearch ? "formControl blocked" : "formControl"
                    }
                    onClick={() => setOpenSearch(true)}
                >
                    {formData.locations[0]
                        ? formData.locations.map((element) => element + ", ")
                        : "Search for a place..."}
                </div>

                <button className="btn btnIcon btnDark">
                    <Image
                        src={img.src}
                        width={18}
                        height={18}
                        alt="search"
                    />
                </button>
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
                {countries.map((element) => (
                    <ListPlacesLi
                        element={element}
                        key={Object.keys(element)}
                        handlePlacesChangeFn={handlePlacesChangeFn}
                    />
                ))}
            </div>
            <div className="rowTypes flex flexCenter">
                {categories.map((element) => (
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
                <button
                    type="submit"
                    className="btn btnPrimary"
                >
                    Szukaj
                </button>
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
                                name="locations"
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
