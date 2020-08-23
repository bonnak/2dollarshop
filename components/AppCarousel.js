import { Carousel } from 'react-bootstrap';

export default function AppCarousel() {
  return <div className="app-carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="/holders/holder.js/800x400?text=First slide&bg=373940"
            src="/carousel1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="/holders/holder.js/800x400?text=Second slide&bg=282c34"
            src="/carousel2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="/holders/holder.js/800x400?text=Third slide&bg=20232a"
            src="/carousel3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  </div>
}