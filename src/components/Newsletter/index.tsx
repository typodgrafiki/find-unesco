import "@/styles/newsletter.scss"

const Newsletter: React.FC = () => {
    return (
        <>
            <section className="newsletter relative">
                <div className="container">
                    <h4>Newsletter</h4>
                    <p>Sign up for the newsletter and receive the latest information</p>
                    <form className="flex">
                        <input
                            type="text"
                            className="formControl"
                            placeholder="john@example.com"
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
        </>
    )
}

export default Newsletter
