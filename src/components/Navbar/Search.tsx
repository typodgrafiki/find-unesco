'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useGlobalContext } from "@/context/ThemeContext"
import img from "@/assets/images/search.svg"
import { listItems } from "@/utils/filteredPlaces"
import listPlaces from "@/lib/listPlacesUnesco.json"
import {
    countriesEurope as listEurope,
    listTypes,
    listPlacesEurope,
    listCountriesEurope,
} from "@/utils/filteredPlaces"
import { FormResults } from "@/context/ThemeContext"

const Search = () => {
    const router = useRouter()
    const formRef = useRef<HTMLFormElement | null>(null)
    const {
        openSearch,
        setOpenSearch,
        formData,
        setFormData,
        formResults,
        setFormResults,
    } = useGlobalContext()

    // przechwytuje zdarzenie klikniecia w zamkniecie dropdown
    const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setOpenSearch(false)
        }
    }

    const handleEscMouse = (event: MouseEvent) => {
        if (
            formRef.current &&
            !formRef.current.contains(event.target as Node)
        ) {
            setOpenSearch(false)
        }
    }

    // zbieram dane do state po kliknieciu w labele
    function handlePlacesChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name: typesName, value, checked } = event.target

        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData }

            const key = typesName as keyof typeof updatedFormData

            if (checked) {
                if (!updatedFormData[key].includes(value)) {
                    updatedFormData[key].push(value)
                }
            } else {
                updatedFormData[key] = updatedFormData[key].filter(
                    (item) => item !== value
                )
            }

            return updatedFormData
        })
    }

    const openSearchHandler = () => {
        setFormData({
            locations: [],
            types: [],
        })
        setOpenSearch(true)
    }

    // przechwytywanie wysylania formularza serch
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // console.log("Kraje:", formData.locations)
        // console.log("Typy:", formData.types)
        // console.log(formResults.results)

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

        if (formData.locations.length > 0) {
            router.push(url())

            const filteredElements3 = (country: string[], types: string[]) => {
                const result = listPlaces.filter((element) => {
                    const isInCountryArray = country.some((countryEl) =>
                        element.states_name_en.includes(countryEl)
                    )

                    const isInTypesArray = types.some((typeEl) =>
                        element.category.includes(typeEl)
                    )

                    if (types.length > 0) {
                        return isInCountryArray && isInTypesArray
                    } else {
                        return isInCountryArray
                    }
                })

                return result
            }

            const result2 = filteredElements3(
                formData.locations,
                formData.types
            )

            setFormResults(result2)

            setOpenSearch(false)
        } else {
            alert("Choose some country")
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscKey)
        document.addEventListener("mousedown", handleEscMouse)

        return () => {
            document.removeEventListener("mousedown", handleEscMouse)
            document.removeEventListener("keydown", handleEscKey)
        }
    }, [])

    return (
        <form
            className="searchForm flex"
            ref={formRef}
            onSubmit={handleSubmit}
        >
            <div className="relative">
                <div
                    className={
                        openSearch ? "formControl blocked" : "formControl"
                    }
                    // onClick={() => setOpenSearch(true)}
                    onClick={openSearchHandler}
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
            </div>
            {openSearch && (
                <>
                    <div className="dropdownMenu show">
                        <div className="rowCountries">
                            <h3>Europe</h3>
                            <ul className="flagList textLeft">
                                {(listCountriesEurope as FormResults[]).map(
                                    (element: FormResults) => (
                                        <li key={element.iso_code}>
                                            <input
                                                id={element.states_name_en[0]}
                                                type="checkbox"
                                                name="locations"
                                                value={
                                                    element.states_name_en[0]
                                                }
                                                onChange={handlePlacesChange}
                                                hidden
                                            />
                                            <label
                                                className="btn"
                                                htmlFor={
                                                    element.states_name_en[0]
                                                }
                                            >
                                                <Image
                                                    className="radius"
                                                    src={`/flags/${element.iso_code}.svg`}
                                                    height={21}
                                                    width={21}
                                                    alt={
                                                        element
                                                            .states_name_en[0]
                                                    }
                                                />
                                                <span>
                                                    {element.states_name_en[0]}
                                                </span>
                                            </label>
                                        </li>
                                    )
                                )}
                            </ul>
                            <ul className="typesList textCenter">
                                {listTypes.map((element) => (
                                    <li key={element}>
                                        <input
                                            id={element}
                                            type="checkbox"
                                            name="types"
                                            value={element}
                                            onChange={handlePlacesChange}
                                            hidden
                                        />
                                        <label
                                            className="btn"
                                            htmlFor={element}
                                        >
                                            <Image
                                                src={`/types/${element.toLowerCase()}.svg`}
                                                width={29}
                                                height={31}
                                                alt={element}
                                            />
                                            {element}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btnPrimary"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </form>
    )
}

export default Search