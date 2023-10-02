"use client"
import { useGlobalContext } from "@/context/ThemeContext"
import data from "@/lib/listPlacesUnesco.json"
import "@/styles/baner.scss"

interface BanerProps {
    id: number
}

const Baner = ({ id }: BanerProps) => {
    const { showModal, setShowModal } = useGlobalContext()
    const item = data.find((entry) => entry.id === id)

    const openModal = (element: React.MouseEvent<HTMLButtonElement>) => {
        setShowModal({
            open: true,
            title: item?.name_en || "",
            description: item?.short_description_en || "",
            image: item?.image || "",
            link: item?.link || "",
            category: item?.category || "",
            country: item?.states_name_en || [],
        })
    }

    return (
        <div className="baner">
            <video
                autoPlay
                loop
                muted
                poster="/video/1041/poster.jpg"
            >
                <source
                    type="video/webm"
                    sizes="1920x1080"
                    src="/video/1041/w-1920.webm"
                />
                <source
                    type="video/webm"
                    sizes="720x1280"
                    src="/video/1041/w-mobile.webm"
                />

                <source
                    type="video/mp4"
                    sizes="720x1280 1920x1080"
                    srcSet="/video/1041/w-mobile.mp4, /video/1041/w-1920.mp4"
                />
            </video>
            <div className="container relative">
                <div className="caption">
                    <h2>{item?.name_en || "Welcome"}</h2>
                    {item?.name_en && (
                        <>
                            <p>{item?.short_description_en}</p>
                            <button
                                className="btn btnBig btnPrimary"
                                onClick={openModal}
                            >
                                Show object
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Baner
