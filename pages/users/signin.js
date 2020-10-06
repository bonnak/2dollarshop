import AppLayout from '../../layouts/AppLayout';
import { Container, Form, Col, Button } from 'react-bootstrap';

export default function signin() {
  return (
    <AppLayout>
      <Container className="signin">
        <div>
          <h2>Sign-in</h2>
        </div>
        <div>
          <Form>
            <Form.Group>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Username | Email" />
              </Col>
            </Form.Group>

            <Form.Group>
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
            <hr />
            <Form.Group>
              <Col className="btn-block__new-account">
                <Button variant="primary" size="lg" type="submit" block>
                  Create your new account
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </AppLayout>
  );
}
