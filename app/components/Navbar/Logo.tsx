"use client"
import Image from "next/image"
import logoImg from "../../assets/images/logo.svg"

const Logo = () => {
    return (
        <Image
            src={logoImg.src}
            width={227}
            height={26}
            alt="Logo Cosmo Cozies"
        />
    )
}

export default Logo
