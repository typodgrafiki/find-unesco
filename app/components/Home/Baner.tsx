import "@/app/styles/baner.scss"

const Baner = () => {
    return (
        <div className="baner">
            <video
                autoPlay
                loop
                muted
            >
                <source src="/baner1.mp4" />
            </video>
            <div className="caption">
                <h2>Misty Forest Retreat</h2>
                <p>
                    Discover peace and enchantment in a cottage amidst the
                    Chinese misty forest, surrounded by mystical trees. A unique
                    experience for nature lovers.
                </p>
                <button className="btn btnBig btnPrimary">Show object</button>
            </div>
        </div>
    )
}

export default Baner
