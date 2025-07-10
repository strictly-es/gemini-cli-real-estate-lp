import { Container, Row, Col, Button } from 'react-bootstrap';

const MainVisual = () => {
  return (
    <div className="bg-light p-5 text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-4">Ideal Property Title</h1>
            <p className="lead">A short, catchy phrase about the property.</p>
            <img src="https://via.placeholder.com/1200x400" className="img-fluid mb-4" alt="Main Visual" />
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
