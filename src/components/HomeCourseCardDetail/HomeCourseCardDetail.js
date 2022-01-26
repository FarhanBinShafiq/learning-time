import React from 'react';
import { Button,Card} from 'react-bootstrap';
import './HomeCourseDetails.css'

const HomeCourseCardDetail = (props) => {
    const { course_title, price, author, img } = props.card
    return (
        <Card style={{ width: '18rem' }} className='home-card'>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{course_title}</Card.Title>
    <Card.Text>
      Author Name: {author}
    </Card.Text>

    <Card.Text>
      Price: $ {price}
    </Card.Text>
    <Button className='home-btn'>Enroll</Button>
  </Card.Body>
</Card>
    );
};

export default HomeCourseCardDetail;