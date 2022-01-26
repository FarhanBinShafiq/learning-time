import React from 'react';
import { Card, Container } from 'react-bootstrap';
import {BsChatLeftDotsFill} from "react-icons/bs";
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, description,  img } = props.review;
    console.log(name);
    return (
   
        <Container fluid>
           
        <Card className='reviewcard h-50 w-100'>
          
          <Card.Img variant="top rounded  p-2"  src={img} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text><BsChatLeftDotsFill/>  {description}</Card.Text>
             
            </Card.Body>
        </Card>


        </Container>

     
    );
};

export default ReviewItem;