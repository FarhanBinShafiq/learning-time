import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeCourseCardDetail from '../HomeCourseCardDetail/HomeCourseCardDetail';
import "./HomeCourseCard.css"

const HomeCourseCard = () => {

    const [cards, setCard] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])


    return (
        <Container fluid>

            <div className='home-card-part'>
                <h1 className='card-head-text'> Our Courses</h1>
                <Row>{
                    cards.map(card => <Col lg={3} sm={12} md={6} className='p-4'><HomeCourseCardDetail card={card}></HomeCourseCardDetail></Col>)
                }
                </Row>
            </div>


        </Container>
    );
};

export default HomeCourseCard;