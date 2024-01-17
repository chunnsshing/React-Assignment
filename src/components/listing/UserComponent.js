import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';

const UserComponent = ({ users }) => {
  const renderList = users.map((user) => {
    const { id, image, name, position, department } = user;
    return (
      <div className="four wide column" key={id}>
       
          <Link to={`/user/${id}`}>
          <Card
          hoverable
          bordered={false}
          style={{
            width: 300,
            display: 'flex',
          }}>
              
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="content">
                  <div className="header">
                    <h1>{name}</h1>
                  </div>
                  <div className="meta position"><h3>{position}</h3></div>
                  <div className="meta">{department}</div>
                </div>
            </Card>   
            
          </Link>
        
      </div>
    );
  });

  console.log("Rendered List:", renderList);

  return <>{renderList}</>;
};

export default UserComponent;



