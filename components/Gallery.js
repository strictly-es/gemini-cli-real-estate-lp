import { useState } from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleShow = (src) => {
    setSelectedImage(src);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Container id="gallery" className="py-5 bg-light">
        <h2 className="text-center mb-4">Gallery</h2>
        <Row>
          {images.map((src, index) => (
            <Col md={4} className="mb-4" key={index} onClick={() => handleShow(src)}>
              <Image src={src} thumbnail fluid style={{ cursor: 'pointer' }} />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <Image src={selectedImage} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallery;
