import { Container, Button } from 'react-bootstrap';

export default function PageFooter() {
  return <div>
    <div className="app-footer__gototop">
      <Button variant="link">Go to Top</Button>
    </div>
    <div className="app-footer">
    <Container>
      <h5>Two-Dollars.com.au</h5>
      <div className="app-footer__nav">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/advertised">Advertised</a></li>
          <li><a href="/term-of-use">Term of Use</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/mobile-apps">Mobile Apps</a></li>
        </ul>
      </div>
      <div className="text-center">
        <span className="text-muted">© Copyright 2021 Two-Dollars.com.au ABN:</span>
      </div>
  </Container>
  </div>
    </div>;
}
