'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useGlobalContext } from "@/context/ThemeContext"
import img from "@/assets/images/search.svg"
import { countriesEurope as listEurope, listTypes, listPlacesEurope, listCountriesEurope } from "@/utils/filteredPlaces"

const Search = () => {
    
    console.log(listPlacesEurope)
    console.log(listCountriesEurope)
    
    const countriesEurope = listEurope();
    
    const formRef = useRef<HTMLFormElement | null>(null)
    const { openSearch, setOpenSearch, formData, setFormData } = useGlobalContext()
    
    const handleEsc = (event: KeyboardEvent) => {
        if (
            event.key === "Escape" ||
            (formRef.current && !formRef.current.contains(event.target))
        ) {
            setOpenSearch(false)
        }
    }
    
    function handlePlacesChange(event: MouseEvent | KeyboardEvent) {
        const { name: typesName, value, checked } = event.target

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
    
    useEffect(() => {

        document.addEventListener("keydown", handleEsc)
        document.addEventListener("mousedown", handleEsc)

        return () => {
            document.removeEventListener("mousedown", handleEsc)
            document.removeEventListener("keydown", handleEsc)
        }
        
    }, [])
    
    return (
        <form
            className="searchForm flex"
            ref={formRef}
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
                <>
                    <div className="dropdownMenu show">
                        <div className="rowCountries">
                            <h3>Europe</h3>
                            <ul>
                                {listCountriesEurope.map((element) => (
                                    <li key={element.iso_code}>
                                        <input
                                            id={element.iso_code}
                                            type="checkbox"
                                            name="locations"
                                            value={element.iso_code}
                                            onChange={handlePlacesChange}
                                            hidden
                                        />
                                        <label
                                            className="btn"
                                            htmlFor={element.iso_code}
                                        >
                                            <img src={`flags/${element.iso_code}.svg`} />
                                            <span>{element.states_name_en[0]}</span>
                                        </label>
                                    </li>
                                ))}
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
                                    Szukaj
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