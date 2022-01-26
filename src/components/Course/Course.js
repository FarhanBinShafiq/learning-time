import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Course.css'

const Course = () => {
    const [cards,setCard]=useState([]);

    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])


    return (
        <Container className='course' fluid>
            <h1 className='course-card-title'> Our Courses</h1>
             <Row className='course-card'>{
                cards.map(card=><Col lg={3} sm={12} md={6} className='course-cards'><CourseDetails card={card}></CourseDetails></Col>)
            }
            </Row>

           
        </Container>
    );
};

export default Course;