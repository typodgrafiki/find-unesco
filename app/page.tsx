import Container from "./components/Container"
import Homepage from "./pages/Home"
import Modal from "./components/modals/Modal"

const Page = () => {
    return (
        <Container>
            <Homepage />
            <Modal />
        </Container>
    )
}

export default Page
