"use client"

import Image from "next/image"
import Button from "@/app/components/Button"
import banerImg from "../../../assets/images/homepage-baner.jpg"
import "../../../styles/baner.scss"

const Baner = () => {
    return (
        <div className="baner">
            <Image
                src={banerImg.src}
                width={1900}
                height={954}
                alt="Logo Cosmo Cozies"
            />
            <div className="caption">
                <h2>Misty Forest Retreat</h2>
                <p>
                    Discover peace and enchantment in a cottage amidst the
                    Chinese misty forest, surrounded by mystical trees. A unique
                    experience for nature lovers.
                </p>
                <Button
                    primary
                    big
                    className="btn"
                >
                    Show object
                </Button>
            </div>
        </div>
    )
}

export default Baner
