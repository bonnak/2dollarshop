import AppLayout from '../../layouts/AppLayout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default function signin() {
  return (
    <AppLayout>
      <Container>
        <div>
          <h2>Sign-in</h2>
        </div>
        <div className="signin">
          <Form>
            <Form.Group>
              <Form.Label htmlFor="inputPassword5">Email</Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>

            <Form.Group>
              <Col className="btn-block">
                <Button variant="primary" size="lg" type="submit" block>
                  Sign in
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </AppLayout>
  );
}
