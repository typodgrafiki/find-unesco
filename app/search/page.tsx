"use client"
import { useSearchParams } from "next/navigation"
import ProductList from "@/app/components/ProductList/ProductList"

// const ProductListLoad = dynamic(
//     () => import("@/app/components/ProductList/ProductList"),
//     {
//         loading: () => <p>Loading...</p>,
//     }
// )

const SearchPage = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get("types")
    const locations = searchParams.get("locations")

    return (
        <>
            <div className="container">Search: {search}</div>
            <div className="container">Search: {locations}</div>
            <div className="container">
                <ProductList />
            </div>
        </>
    )
}

export default SearchPage