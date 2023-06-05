import { Container,Row,Col } from "react-bootstrap"
import Layout from "../layout/AppLayout"

export default function About () {

    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                    <h2>About</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis nesciunt voluptatem deserunt accusantium omnis ad, dicta numquam culpa temporibus repellat unde dignissimos corrupti, praesentium, eligendi tempora ratione reiciendis rem.</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}