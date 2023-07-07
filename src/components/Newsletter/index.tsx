import "@/styles/newsletter.scss"

const Newsletter: React.FC = () => {
    return (
        <>
            <section className="newsletter">
                <div className="container">
                    <h4>Newsletter</h4>
                    <p>
                        Discover tranquility and harmony in a leafy haven
                        nestled within the peaceful Chinese misty.
                    </p>
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
