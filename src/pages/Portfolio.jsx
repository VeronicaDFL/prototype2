import { Container,Row,Col} from "react-bootstrap";
import Gallery from "../layout/Gallery"
import Layout from "../layout/AppLayout";


export default function Portfolio () {

    return (
        <Layout>
            <Container>
                <Row>
                    <Col className= "text-center">
                        <h2>Portfolio</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={7}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, maiores magni. Cumque laudantium, sunt blanditiis mollitia reprehenderit excepturi veritatis totam modi repellat deleniti quos, quam eveniet aut eius cupiditate aspernatur!</p>
                    </Col>
                </Row>
            </Container>
            <Gallery/>
        </Layout>
    )
}