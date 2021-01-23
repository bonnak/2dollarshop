import {
  useCallback, useState, useContext, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import { Errors } from 'form-backend-validation';
import {
  Container, Form, Col, Button, Alert,
} from 'react-bootstrap';
import AppLayout from '../../layouts/AppLayout';
import { Context as AuthContext } from '../../contexts/AuthContext';

export default function SignIn() {
  const router = useRouter();
  const [errMessage, setErrMessage] = useState();
  const [validationErrors, setValidationErrors] = useState(new Errors());
  const [payload, setPayload] = useState({ email: '', password: '' });
  const { state, signin } = useContext(AuthContext);
  const signIn = useCallback(async (e) => {
    e.preventDefault();
    setErrMessage(null);
    setValidationErrors(new Errors());

    try {
      await signin(payload);

      router.push('/');
    } catch (err) {
      const _err = err.response.data;

      if (_err.errors) setValidationErrors(new Errors(_err.errors));
      else setErrMessage(_err.message);
    }
  }, [payload]);

  useEffect(() => {
    if (state.authenticated) {
      router.push('/');
    }
  }, [state.authenticated]);

  return (
    <AppLayout>
      <Container className="signin">
        <div>
          <h2>Sign-in</h2>
        </div>
        <div>
          { errMessage && <Alert variant="danger">{errMessage}</Alert> }
          <Form>
            <Form.Group>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Username | Email"
                  value={payload.email}
                  onChange={(e) => setPayload({ ...payload, email: e.target.value })}/>
                {
                  validationErrors.has('email')
                  && <span className="text-sm text-danger">{validationErrors.first('email')}</span>
                }
              </Col>
            </Form.Group>

            <Form.Group>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={payload.password}
                  onChange={(e) => setPayload({ ...payload, password: e.target.value })}/>
                {
                  validationErrors.has('password')
                  && <span className="text-sm text-danger">{validationErrors.first('password')}</span>
                }
              </Col>
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>

            <Form.Group>
              <Col className="btn-block__signin">
                <Button variant="primary" size="lg" type="submit" onClick={signIn}>
                  Sign in
                </Button>
              </Col>
            </Form.Group>
            <hr />
            <p className="signin__new-users">New users</p>
            <Form.Group>
              <Col className="btn-block__new-account">
                <Button
                  variant="primary"
                  size="lg"
                  type="button"
                  onClick={() => router.push('/users/register')}>
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
