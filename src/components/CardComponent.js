import React from 'react';

const Card = (props) => {
  return (
  
     
    <div className="card">
      <div className="card-body">
     
        <h5 className="card-user-id">{props.user.userId}</h5>
        <h5 className="card-id mb-2 text-muted">{props.user.title}</h5>
        <h6 className="card-title mb-2 text-muted">{props.user.body}</h6>
        <div className="col-5">
                
                
              </div>
        </div>

      </div>
   

    
  
  )
}
export default Card;