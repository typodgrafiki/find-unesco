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
                />
                <ProductList 
                    country="Slovenia"
                />
            </div>
        </>
    )
}

export default Homepage
