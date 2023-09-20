'use client'
import { useGlobalContext } from "@/context/ThemeContext"
import data from "@/lib/listPlacesUnesco.json"
import "@/styles/baner.scss"

interface BanerProps {
    id: number
}

const Baner = ({ id }: BanerProps) => {
    
    const { showModal, setShowModal } = useGlobalContext()
    const item = data.find(entry => entry.id === id);
    
    const openModal = (element: React.MouseEvent<HTMLButtonElement>) => {
        setShowModal({
            open: true,
            title: item?.name_en || "",
            description: item?.short_description_en || "",
            image: 'image xD'
        });
    }
    
    return (
        <div className="baner">
            <video
                autoPlay
                loop
                muted
            >
                <source src="/baner1041.mp4" />
            </video>
            <div className="container relative">
                <div className="caption">
                    <h2>{item?.name_en || "Welcome"}</h2>
                    {item?.name_en && (
                        <>
                            <p>{item?.short_description_en}</p>
                            <button className="btn btnBig btnPrimary" onClick={openModal}>Show object</button>    
                        </>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default Baner