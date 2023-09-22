"use client"
import React, { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "@/styles/newsletter.scss"
import "react-toastify/dist/ReactToastify.css"

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email) {
            try {
                const response = await axios.post(`/api?email=${email}`)
                console.log(response.data.email)
                if (response.data.success) {
                    toast.success("Zapisałeś się na newsletter", {
                        position: toast.POSITION.BOTTOM_CENTER,
                    })

                    //zresetowac form
                } else {
                    toast.error("Adres jest już na liście subskrybentów", {
                        position: toast.POSITION.BOTTOM_CENTER,
                    })
                }
            } catch (error) {
                toast.error("Błąd połączenia, spróbuj później.", {
                    position: toast.POSITION.BOTTOM_CENTER,
                })
            }
        }
    }

    return (
        <>
            <section className="newsletter relative">
                <div className="container">
                    <h4>Newsletter</h4>
                    <p>
                        Sign up for the newsletter and receive the latest
                        information
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="formControl"
                            placeholder="john@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btnPrimary nowrap"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Newsletter
