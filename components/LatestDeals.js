import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function LatestDeals() {
  return <div className="mt-2">
    <Card border="light">
      <Card.Header as="h5">TODAY</Card.Header>
      <Card.Body>
        <Card.Title>Light Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body> <hr />
      <Card.Body>
        <Card.Title>Light Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body> <hr />

    </Card>
  </div>
}