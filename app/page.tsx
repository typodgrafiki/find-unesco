import dynamic from "next/dynamic"
import Baner from "@/app/components/Home/Baner"
import ProductList from "@/app/components/ProductList/ProductList"

const ProductListLoad = dynamic(
    () => import("@/app/components/ProductList/ProductList"),
    {
        loading: () => <p>Loading...</p>,
    }
)

const Homepage = () => {
    return (
        <>
            <Baner />
            <div className="container">
                <ProductListLoad />
            </div>
        </>
    )
}

export default Homepage
