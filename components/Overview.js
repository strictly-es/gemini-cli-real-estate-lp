import { Container, Table } from 'react-bootstrap';

const Overview = () => {
  return (
    <Container id="overview" className="py-5">
      <h2 className="text-center mb-4">Overview</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Price</td>
            <td>$1,234,567</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>123 sqm</td>
          </tr>
          <tr>
            <td>Layout</td>
            <td>3LDK</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Tokyo, Japan</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Overview;
