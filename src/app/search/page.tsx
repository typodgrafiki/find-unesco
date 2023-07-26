"use client"
import { useSearchParams } from "next/navigation"
import ProductList from "@/components/ProductList/ProductList"

const SearchPage = () => {
    const searchParams = useSearchParams()
    const types = searchParams.get("types")
    const country = searchParams.get("locations")

    return (
        <>
            <div className="container">Search countries: {types}</div>
            <div className="container">Search locations: {country}</div>
            <div className="container">
                <ProductList country={country} />
            </div>
        </>
    )
}

export default SearchPage