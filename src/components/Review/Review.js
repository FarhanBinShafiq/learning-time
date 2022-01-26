import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'


import ReviewItems from '../ReviewItem/ReviewItem';

const Review = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    })

    return (
        <>
            <Container  className='review' fluid>
                <h1 className='text-center p-3 team-title'>Our Students</h1>
                <Row >

                    {
                        reviews.map(review => <Col className='p-3'>
                            <ReviewItems review={review} > </ReviewItems>   </Col>
                        )
                    }


                </Row>
            </Container>
        </>

    );
};

export default Review;