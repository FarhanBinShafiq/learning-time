import React from 'react';
import { Card } from 'react-bootstrap';
import './CourseDetails.css'

const CourseDetails = (props) => {
    const { course_title, price, img } = props.card
    return (
        <div>
            <Card  className='coursedetail-card'>
                <Card.Img variant="top" src={img} className='coursedetails-img' />
                <Card.Body>

                    <Card.Title>Title: {course_title}</Card.Title>
                    <Card.Text>Price: $ {price}</Card.Text>
                    
                 

                </Card.Body>
              
               
            </Card>

        </div>
    );
};

export default CourseDetails;