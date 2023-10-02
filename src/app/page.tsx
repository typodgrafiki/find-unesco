import FrontendLayout from "@/app/(routes)/layout"
import Baner from "@/components/Baner"
import ProductList from "@/components/ProductList/ProductList"
import Loading from "@/components/modals/Loading"

const Homepage = () => {
    return (
        <>
            <FrontendLayout>
                <Baner id={1041} />
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
                <Loading />
            </FrontendLayout>
        </>
    )
}

export default Homepage
