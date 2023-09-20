import Link from 'next/link'
import "@/styles/footer.scss"

const Footer = () => {
    
    return (
        <>
            <footer className="footer relative">
                <div className="container flex flexJustifyBetween flexAlignCenter">
                    <ul>
                        <li>
                            <Link href="/about" className="transition">About project</Link>
                            
                        </li>
                        <li>
                            <Link href="/contact" className="transition">Contact</Link>
                        </li>
                        <li>
                            <Link href="/buy-coffee" className="transition">Buy coffee</Link>
                        </li>
                    </ul>
                    <ul className="social">
                        <li>
                            <Link href="https://www.instagram.com/findunesco" target="_blank">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4175 7.13044C10.5903 7.13044 7.41924 10.2468 7.41924 14.1287C7.41924 18.0105 10.5356 21.1269 14.4175 21.1269C18.2993 21.1269 21.4157 17.9558 21.4157 14.1287C21.4157 10.3015 18.2446 7.13044 14.4175 7.13044ZM14.4175 18.6119C11.9572 18.6119 9.93424 16.589 9.93424 14.1287C9.93424 11.6684 11.9572 9.64543 14.4175 9.64543C16.8778 9.64543 18.9007 11.6684 18.9007 14.1287C18.9007 16.589 16.8778 18.6119 14.4175 18.6119Z" fill="#3C4042"/><path d="M21.6891 8.55196C22.5648 8.55196 23.2746 7.84209 23.2746 6.96642C23.2746 6.09075 22.5648 5.38088 21.6891 5.38088C20.8134 5.38088 20.1035 6.09075 20.1035 6.96642C20.1035 7.84209 20.8134 8.55196 21.6891 8.55196Z" fill="#3C4042" /><path d="M25.7896 2.86589C24.3681 1.3897 22.3452 0.624268 20.0489 0.624268H8.78609C4.02947 0.624268 0.858398 3.79534 0.858398 8.55196V19.7601C0.858398 22.111 1.62383 24.134 3.15469 25.6102C4.63088 27.0317 6.59914 27.7424 8.84076 27.7424H19.9942C22.3452 27.7424 24.3134 26.977 25.7349 25.6102C27.2111 24.1886 27.9766 22.1657 27.9766 19.8147V8.55196C27.9766 6.25566 27.2111 4.28741 25.7896 2.86589ZM25.5709 19.8147C25.5709 21.5096 24.9695 22.8765 23.9854 23.8059C23.0013 24.7354 21.6344 25.2274 19.9942 25.2274H8.84076C7.20055 25.2274 5.83371 24.7354 4.84958 23.8059C3.86545 22.8218 3.37339 21.455 3.37339 19.7601V8.55196C3.37339 6.91174 3.86545 5.5449 4.84958 4.56078C5.77903 3.63132 7.20055 3.13926 8.84076 3.13926H20.1035C21.7438 3.13926 23.1106 3.63132 24.0947 4.61545C25.0242 5.59958 25.5709 6.96642 25.5709 8.55196V19.8147Z" fill="#3C4042" /></svg>
                            </Link>
                        </li>
                        {/* <li>
                            <a href="/">
                                <svg
                                    width="24"
                                    height="27"
                                    viewBox="0 0 24 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.8235 11.0695C21.4823 11.075 19.1986 10.351 17.2949 8.99965V18.4243C17.2942 20.1699 16.7562 21.8736 15.7527 23.3078C14.7493 24.7419 13.3283 25.8381 11.6796 26.4497C10.031 27.0614 8.23335 27.1593 6.52708 26.7304C4.82081 26.3015 3.28724 25.3663 2.13143 24.0498C0.975611 22.7333 0.252646 21.0982 0.059201 19.3632C-0.134244 17.6282 0.211053 15.876 1.04892 14.3409C1.88679 12.8058 3.17729 11.5609 4.74786 10.7728C6.31843 9.98461 8.09422 9.69073 9.83777 9.93041V14.6707C9.03992 14.4218 8.18317 14.4293 7.38987 14.6921C6.59657 14.9549 5.90729 15.4596 5.42047 16.134C4.93364 16.8085 4.67416 17.6182 4.67909 18.4476C4.68402 19.277 4.95309 20.0837 5.4479 20.7524C5.9427 21.4211 6.63793 21.9176 7.43429 22.1712C8.23066 22.4247 9.08744 22.4222 9.88228 22.164C10.6771 21.9058 11.3694 21.4052 11.8602 20.7336C12.351 20.062 12.6153 19.2538 12.6152 18.4243V0H17.2949C17.2916 0.39189 17.3247 0.783246 17.3938 1.16912C17.5564 2.03053 17.8945 2.84998 18.3874 3.57736C18.8803 4.30474 19.5177 4.92475 20.2606 5.39947C21.3174 6.09245 22.5565 6.46181 23.8235 6.46154V11.0695Z"
                                        fill="#3C4042"
                                    />
                                </svg>
                            </a>
                        </li> */}
                    </ul>
                    <ul className="flexJustifyEnd">
                        {/* <li>
                            <a href="/">English</a>
                        </li>
                        <li>
                            <a href="/">Polish</a>
                        </li> */}
                    </ul>
                </div>
                <p className="textCenter copyright">© 2023 FindUNESCO inc.</p>
            </footer>
        </>
    )
}
export default Footer
