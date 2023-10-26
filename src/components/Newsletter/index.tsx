"use client"
import React, { useState, useRef } from "react"
import axios from "axios"
import { Dispatch, SetStateAction } from "react"
import { ToastContainer, toast } from "react-toastify"
import "@/styles/newsletter.scss"
import "react-toastify/dist/ReactToastify.css"
import { Alert } from "flowbite-react"

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState("")
    const [alert, setAlert] = useState("")
    const [loading, setLoading] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email) {
            await setLoading(true)
            try {
                const response = await axios.post(
                    `/newsletter/add?email=${email}`
                )
                if (response.data.success) {
                    setAlert("You have signed up for the newsletter.")
                } else {
                    setAlert("You have signed up for the newsletter.")
                }
                setEmail("")
            } catch (error) {
                setAlert("Connection error, please try again later.")
            } finally {
                setLoading(false)
                setTimeout(() => {
                    setAlert("")
                }, 3000)
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
                    <form
                        onSubmit={handleSubmit}
                        className="flex"
                        ref={formRef}
                    >
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
                            disabled={loading}
                        >
                            {loading ? "Adding..." : "Sign in"}
                        </button>
                    </form>
                </div>
            </section>
            {alert && (
                <DismissableAlert
                    alert={alert}
                    closeFn={setAlert}
                />
            )}
        </>
    )
}

function DismissableAlert({
    alert,
    closeFn,
}: {
    alert: string
    closeFn: Dispatch<SetStateAction<string>>
}) {
    return (
        <div
            className="alert flex"
            onClick={() => closeFn("")}
        >
            <p>{alert}</p>
            <button>X</button>
        </div>
    )
}

export default Newsletter
