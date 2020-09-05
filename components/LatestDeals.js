import { Card } from 'react-bootstrap';
import Avatar from './Avatar';

function Deal ({ title, description, image, createdAt, expiredAt, username, avatar, tags }) {
  return <Card className="deal" >
    <div className="deal__sections">
      <div className="deal__section-1">
        <div className="avatar">
          { avatar ? <img src={avatar} /> : <Avatar /> }
        </div>
      </div>
      <div className="deal__section-2">
        <a href="#" className="deal__title">{ title }</a>
        <div className="mt-1">
          <a href="#" className="deal__username">{username}</a>
          <span className="deal__posted-at">{createdAt}</span>
        </div>
        <p className="deal__description">{description}</p>
        <div>
          <div className="deal__tags">
            {tags.map(tag => {
              return <span>{tag}</span>
            })}
          </div>
          <span className="deal__expired-at">{expiredAt}</span>
        </div>
      </div>
    </div>
  </Card>
}

export default function LatestDeals({ items }) {
  return <div className="latest-deals mt-2">
    <h3>Today</h3>
    { items.map(item => {
      return <Deal { ...item } />
    }) }
  </div>
}