import { Container } from 'react-bootstrap';

export default function PageFooter() {
  return <footer>
    <Container>
      <div>
        <ul>
          <li>About</li>
          <li>Contact Us</li>
          <li>Advertises</li>
        </ul>
      </div>
      <div className="text-center">
        <span className="text-muted">© Copyright 2021 Two-Dollars.com.au ABN:</span>
      </div>
    </Container>
  </footer>;
}
