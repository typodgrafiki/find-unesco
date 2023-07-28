import FrontendLayout from "@/app/(routes)/layout"
import Baner from "@/components/Baner"
import ProductList from "@/components/ProductList/ProductList"

const Homepage = () => {
    return (
        <>
            <FrontendLayout>
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
            </FrontendLayout>
        </>
    )
}

export default Homepage
