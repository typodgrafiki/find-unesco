"use client"
import Image from "next/image"
import logoImg from "../../assets/images/logo.svg"

const Logo = () => {
    return (
        <Image
            src={logoImg.src}
            width={222}
            height={30}
            alt="Logo Find Unesco"
        />
    )
}

export default Logo
