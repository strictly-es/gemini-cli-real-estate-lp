import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
  return (
    <Container id="features" className="py-5">
      <h2 className="text-center mb-4">Property Features</h2>
      <Row>
        <Col md={4} className="text-center">
          <h3>Feature 1</h3>
          <p>Short description of the feature.</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Feature 2</h3>
          <p>Short description of the feature.</p>
        </Col>
        <Col md={4} className="text-center">
          <h3>Feature 3</h3>
          <p>Short description of the feature.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
