import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import listPlaces from "@/app/utils/listPlacesUnesco.json"
import img from "@/app/assets/images/search.svg"

const Search = () => {
    
    return (
        <form className="searchForm flex">
            <div className="formControl">Search for a place...</div>
            <button className="btn btnIcon btnDark">
                <Image
                    src={img.src}
                    width={18}
                    height={18}
                    alt="search"
                />
            </button>
        </form>
    )
}

export default Search
