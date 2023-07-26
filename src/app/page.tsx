// import dynamic from "next/dynamic"
import Baner from "@/components/Baner"
import ProductList from "@/components/ProductList/ProductList"

// const ProductListLoad = dynamic(
//     () => import("@/app/components/ProductList/ProductList"),
//     {
//         loading: () => <p>Loading...</p>,
//     }
// )

const Homepage = () => {
    return (
        <>
            <Baner />
            <div className="container">
                <ProductList 
                    country="Poland" 
                    iso="pl"
                />
                <ProductList 
                    country="Italy" 
                    iso="it"
                />
                <ProductList 
                    country="Norway" 
                    iso="no"
                />
                <ProductList 
                    country="Switzerland" 
                    iso="ch"
                />
            </div>
        </>
    )
}

export default Homepage
