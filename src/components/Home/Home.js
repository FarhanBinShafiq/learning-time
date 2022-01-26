import React from 'react';
import bg from '../../images/banner.png'
import './Home.css'


import { Col, Container, Row } from 'react-bootstrap';
import HomeCourseCard from '../HomeCourseCard/HomeCourseCard';
import Review from '../Review/Review';


const Home = () => {
  return (
    <>
      <Container className='homebg' >

        <Row>
          <Col className='pt-4' lg={6} md={12} sm={12}>
            <h1>WELCOME TO <span className='top-span'>Learning Time</span></h1>
            <h6>LEARNING ONLINE IS EASY NOW</h6>
            <h2>WE ARE THE BEST
              IN ONLINE EDUCATION</h2>
            <p>Hello,Are you ready now?</p>
            <button className='home-btn'>Find Courses</button>

          </Col>
          <Col lg={6} md={12} sm={12}>
            <img src={bg} alt='background' fluid />
          </Col>
        </Row>

     



      </Container>
      <Review></Review>
      <HomeCourseCard></HomeCourseCard>
    </>
  );
};

export default Home;