import React from "react";
import Card from 'react-bootstrap/Card';

const CardsPromotions = ({banner, title, content}) => {
  return (
    <>
    <Card className="mt-3">
      <Card.Img variant="top" src={banner} alt="CodeNewbie Community" />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{__html: title}}>         
        </Card.Title>
        <Card.Text dangerouslySetInnerHTML={{__html: content}}>
          
        </Card.Text>        
      </Card.Body>
    </Card>
    </>
  );
};

export default CardsPromotions;
