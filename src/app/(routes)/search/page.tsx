"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useGlobalContext } from "@/context/ThemeContext"
import ProductList from "@/components/ProductList/ProductList"
import Map from "@/components/Map/Map"

const SearchPage = () => {
    const searchParams = useSearchParams()
    const types = searchParams.get("types")
    const country = searchParams.get("locations")
    const [footerVisible, setFooterVisible] = useState(0)
    const { formData } = useGlobalContext()

    useEffect(() => {
        
        // const handleScroll = () => {
        //     const footerHeight = document
        //         .querySelector("#footer")
        //         .getBoundingClientRect().height
        //     const bottomOfViewport = window.innerHeight + window.scrollY
        //     const visibleFooter =
        //         bottomOfViewport - document.body.scrollHeight + footerHeight
        //     setFooterVisible(visibleFooter > 0 ? visibleFooter + 10 : 10)
        // }

        // handleScroll()

        // window.addEventListener("scroll", handleScroll)
        // window.addEventListener("resize", handleScroll)

        // return () => {
        //     window.removeEventListener("scroll", handleScroll)
        //     window.removeEventListener("resize", handleScroll)
        // }
    }, [])

    return (
        <>  
            <div className="container mapContainer">
                <ProductList
                    country={country}
                    types={types}
                />
                <Map
                    country={country}
                    types={types}
                />
            </div>
        </>
    )
}

export default SearchPage