import { Container, Row, Col, Button } from 'react-bootstrap';

const MainVisual = () => {
  return (
    <div className="bg-light p-5 text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-4">Ideal Property Title</h1>
            <p className="lead">A short, catchy phrase about the property.</p>
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid mb-4" alt="Main Visual" />
            <div>
              <Button href="#contact" variant="primary" size="lg">Contact Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainVisual;
