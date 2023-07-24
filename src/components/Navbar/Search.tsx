'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useGlobalContext } from "@/context/ThemeContext"
import listPlaces from "@/lib/listPlacesUnesco.json"
import img from "@/assets/images/search.svg"

const Search = () => {
    
    const formRef = useRef<HTMLFormElement | null>(null)
    const { openSearch, setOpenSearch, formData, setFormData } = useGlobalContext()
    
    function handlePlacesChange() {

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
                // <SearchDropdown handlePlacesChangeFn={handlePlacesChange} />
                'Open search'
            )}
        </form>
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

    console.log(element)

    return (
        <>
            <div>
                <h3>A</h3>
                <ul>
                    <li>111</li>
                    {/* {countriesList.map((element) => (
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
                    ))} */}
                </ul>
            </div>
        </>
    )
}

export default Search