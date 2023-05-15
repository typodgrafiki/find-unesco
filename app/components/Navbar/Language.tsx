"use client"
import Image from "next/image"
import Button from "../Button"
import img from "../../assets/images/flag.svg"

const Language = () => {
    return (
        <div className="dropdown">
            <Button>
                <Image
                    src={img.src}
                    width={21}
                    height={21}
                    alt="Language"
                />
            </Button>
            <ul className="dropdown-menu">
                <li>
                    <a href="btn">English</a>
                </li>
                <li>
                    <a href="btn">German</a>
                </li>
                <li>
                    <a href="btn">Polish</a>
                </li>
            </ul>
        </div>
    )
}

export default Language
