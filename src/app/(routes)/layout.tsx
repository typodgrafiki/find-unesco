import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Modal from "@/components/modals/Modal"
import Newsletter from "@/components/Newsletter"

export default function FrontendLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main >{children}</main>
                <div id="footer">
                    <Newsletter />
                    <Footer />
                </div>
                <Modal />
            </div>
        </>
    )
}