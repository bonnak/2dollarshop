import { Card } from 'react-bootstrap';
import Avatar from './Avatar';

export default function Product({
  title, description, image, createdAt, expiredAt, username, avatar, tags,
}) {
  return <Card className="product" >
    <div className="product__sections">
      <div className="product__section-1">
        <div className="avatar">
          { avatar ? <img src={avatar} /> : <Avatar /> }
        </div>
      </div>
      <div className="product__section-2">
        <a href="#" className="product__title">{ title }</a>
        <div className="mt-1">
          <a href="#" className="product__username">{username}</a>
          <span className="product__posted-at">{createdAt}</span>
        </div>
        <p className="product__description">{description}</p>
        <div>
          <div className="product__tags">
            {tags.map((tag, index) => <span key={index}>{tag}</span>)}
          </div>
          <span className="product__expired-at">{expiredAt}</span>
        </div>
      </div>
    </div>
  </Card>;
}
