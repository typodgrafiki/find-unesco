import Link from "next/link"
import Image from "next/image"
import logoImg from "../../assets/images/logo.svg"

const Logo = () => {
    return (
        <Link href="/">
            <Image
                src={logoImg.src}
                width={222}
                height={30}
                alt="Logo Find Unesco"
            />
        </Link>
    )
}

export default Logo
