import { useCallback, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { Errors } from 'form-backend-validation';
import {
  Container, Form, Col, Button, Alert
} from 'react-bootstrap';
import AppLayout from '../../layouts/AppLayout';

export default function signup() {
  const router = useRouter();
  const [errMessage, setErrMessage] = useState();
  const [validationErrors, setValidationErrors] = useState(new Errors);
  const [payload, setPayload] = useState({
    name: '', email: '', password: '', passwordConfirmation: ''
  });
  const register = useCallback(async (e) => {
    e.preventDefault();
    setErrMessage(null);
    setValidationErrors(new Errors);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, payload);

      router.push('/users/signin');
    } catch(err) {
      const _err = err.response.data;

      if(_err.errors) setValidationErrors(new Errors(_err.errors));
      else setErrMessage(_err.message);
    }
  }, [payload])

  return (
    <AppLayout>
      <Container className="signup">
        <div className="signup__new-account">
          <h2>Create new account</h2>
        </div>
        <div>
          { errMessage && <Alert variant="danger">{errMessage}</Alert> }
          <Form>
            <Form.Group>
              <Col sm={10}>
                <Form.Control 
                  type="text" 
                  placeholder="Name"
                  value={payload.name}
                  onChange={e => setPayload({ ...payload, name: e.target.value })}/>
                { 
                  validationErrors.has('name') && 
                  <span className="text-sm text-danger">{validationErrors.first('name')}</span>
                }
              </Col>
            </Form.Group>

            <Form.Group>
              <Col sm={10}>
                <Form.Control 
                  type="email" 
                  placeholder="Email" 
                  value={payload.email} 
                  onChange={e => setPayload({ ...payload, email: e.target.value })}/>
                { 
                  validationErrors.has('email') && 
                  <span className="text-sm text-danger">{validationErrors.first('email')}</span>
                }
              </Col>
            </Form.Group>

            <Form.Group>
              <Col sm={10}>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={payload.password} 
                  onChange={e => setPayload({ ...payload, password: e.target.value })}/>
                { 
                  validationErrors.has('password') && 
                  <span className="text-sm text-danger">{validationErrors.first('password')}</span>
                }
              </Col>
            </Form.Group>

            <Form.Group>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Re-enter Password"
                  value={payload.passwordConfirmation} 
                  onChange={e => setPayload({ ...payload, passwordConfirmation: e.target.value })}/>
                { 
                  validationErrors.has('passwordConfirmation') && 
                  <span className="text-sm text-danger">{validationErrors.first('passwordConfirmation')}</span>
                }
              </Col>
            </Form.Group>

            <Form.Group>
              <Col className="btn-block__signup">
                <Button variant="primary" size="lg" type="submit" onClick={register}>
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
