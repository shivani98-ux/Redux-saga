import React from 'react';

const Card = (props) => {
  return (
  
     
    <div className="card">
      <div className="card-body">
     
        <h5 className="card-id">Id: {props.user.id}</h5>
        <h5 className="card-title mb-2 text-muted">Title :{props.user.title}</h5>
        <h6 className="card-user mb-2 text-muted"> Body: {props.user.body}</h6>
        <div className="col-5">
                
                
              </div>
        </div>

      </div>
   

    
  
  )
}
export default Card;