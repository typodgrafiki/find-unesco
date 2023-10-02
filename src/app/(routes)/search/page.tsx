"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useGlobalContext } from "@/context/ThemeContext"
import ProductList from "@/components/ProductList/ProductList"
import Map from "@/components/Map/Map"

const SearchPage = () => {
    const searchParams = useSearchParams()
    const types = searchParams.get("types") || ""
    const country = searchParams.get("locations") || ""

    return (
        <>
            <div className="container mapContainer">
                <ProductList
                    country={country}
                    types={types}
                />
                <Map />
            </div>
        </>
    )
}

export default SearchPage
