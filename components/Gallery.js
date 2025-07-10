import { Container, Row, Col, Image } from 'react-bootstrap';

const Gallery = () => {
  return (
    <Container id="gallery" className="py-5 bg-light">
      <h2 className="text-center mb-4">Gallery</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Image src="https://via.placeholder.com/400x300" thumbnail />
        </Col>
        <Col md={4} className="mb-4">
          <Image src="https://via.placeholder.com/400x300" thumbnail />
        </Col>
        <Col md={4} className="mb-4">
          <Image src="https://via.placeholder.com/400x300" thumbnail />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
