"use client"
import { useSearchParams } from "next/navigation"
import ProductList from "@/app/components/ProductList/ProductList"

const SearchPage = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get("types")
    const country = searchParams.get("country")

    return (
        <>
            <div className="container">Search countries: {search}</div>
            <div className="container">Search locations: {country}</div>
            <div className="container">
                <ProductList />
            </div>
        </>
    )
}

export default SearchPage