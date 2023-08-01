"use client"
import { useState, useEffect } from 'react'
import { useSearchParams } from "next/navigation"
import ProductList from "@/components/ProductList/ProductList"

const SearchPage = () => {
    const searchParams = useSearchParams()
    const types = searchParams.get("types")
    const country = searchParams.get("locations")
    const [footerVisible, setFooterVisible] = useState(0)
    
    useEffect(() => {
        const handleScroll = () => {
            const footerHeight = document.querySelector('#footer').getBoundingClientRect().height
            const bottomOfViewport = window.innerHeight + window.scrollY
            const visibleFooter = bottomOfViewport - document.body.scrollHeight + footerHeight
            setFooterVisible(visibleFooter > 0 ? visibleFooter + 10 : 10 )
        }
        
        handleScroll();
    
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    return (
        <>
            <div className="container mapContainer">
                <ProductList 
                    country={country} 
                    types={types} 
                />
                <div id="map" style={{ bottom: `${footerVisible}px`}}>    

                </div>
            </div>
        </>
    )
}

export default SearchPage