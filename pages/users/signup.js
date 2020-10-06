import AppLayout from '../../layouts/AppLayout';
import { Container, Form, Col, Button } from 'react-bootstrap';

export default function signup() {
  return (
    <AppLayout>
      <Container className="signup">
        <div>
          <h2>Create new account</h2>
        </div>
        <div>
          <Form>
            <Form.Group>
              <Col sm={10}>
                <Form.Control type="user" placeholder="Username" />
              </Col>
            </Form.Group>

            <Form.Group>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
                <span className="signup__password-policy">
                  Password must be at least 6 characters
                </span>
              </Col>
            </Form.Group>

            <Form.Group>
              <Col sm={10}>
                <Form.Control
                  type="re-password"
                  placeholder="Re-enter Password"
                />
              </Col>
            </Form.Group>

            <Form.Group>
              <Col className="btn-block__signup">
                <Button variant="primary" size="lg" type="submit" block>
                  Create your account
                </Button>
                <span className="signup__user-policy">
                  By creating an account, you agree that you have read and
                  accepted our Conditions of Use and Private Notice.
                </span>
              </Col>
            </Form.Group>
            <hr />
            <p className="signup__already-have-account">
              Already have an account?<a href="/users/signin"> Sign in</a>
            </p>
          </Form>
        </div>
      </Container>
    </AppLayout>
  );
}
