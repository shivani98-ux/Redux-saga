import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.user.userId}</h5>
        <h5 className="card-title mb-2 text-muted">{props.user.id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.user.title}</h6>
        <p className="card-text">{props.user.body}</p>
      </div>
    </div>
  )
}
export default Card;