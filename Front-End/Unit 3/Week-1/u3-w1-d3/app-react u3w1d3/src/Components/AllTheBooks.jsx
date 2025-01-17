import { Card, Row, Button, Col } from 'react-bootstrap'
import horror from '../data/horror.json'

const AllTheBooks = () => {
  return (
    <Row className='bg-dark g-5'>
      {horror.map((book) => {
        return (
          <Col key={book.asin}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}</Card.Text>
                <Button variant="primary">pulsante</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
