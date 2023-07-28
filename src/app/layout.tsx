import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Modal from "@/components/modals/Modal"
import Newsletter from "@/components/Newsletter"
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/global.scss"

import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["300", "400", "500", "600"],
})

export const metadata = {
    title: "Find UNESCO",
    description:
        "Find UNESCO is a website that provides a comprehensive list of UNESCO national heritage sites. Discover cultural and natural treasures around the world, explore historical landmarks, and plan your next travel destination. Browse through our extensive database of UNESCO World Heritage sites and learn about their preservation and recognition. Start your journey with Find UNESCO today.",
    keywords: [
        "UNESCO heritage sites",
        "National heritage sites",
        "World heritage list",
        "Cultural heritage sites",
        "Natural heritage sites",
        "UNESCO monuments",
        "Historical landmarks",
        "Heritage tourism",
        "UNESCO World Heritage",
        "Site exploration",
        "Travel destinations",
        "Global heritage sites",
        "UNESCO preservation",
        "UNESCO recognition",
        "UNESCO database",
    ],
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ThemeProvider>
                    <div className="wrapper">
                        <Navbar />
                        <main>{children}</main>
                        <div id="footer">
                            <Newsletter />
                            <Footer />
                        </div>
                        <Modal />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
