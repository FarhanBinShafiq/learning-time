import React from 'react';
import { Card, Col, Container,  Row } from 'react-bootstrap';
import person1 from '../../images/person1.png'
import person2 from '../../images/person2.png'
import person3 from '../../images/person3.png'
import person4 from '../../images/person4.png'

import './Team.css'

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";




const Team = () => (

    <Container className='aboutb' fluid>
        <h2 className='text-success text-center p-2'>Our Experts Teacher</h2>

        <Row className='team-row'>

            <Col>
                <Card className="d-flex flex-row team-card">
                    <Card.Img variant="top teampic" src={person1} />
                    <Card.Body className='team-card-detail'>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Title>TOP COURSES</Card.Title>


                        <div className='team-social-media'>
                            <a href=''>  <FaFacebookF /></a>
                            <a href=''>  <FaLinkedinIn /></a>
                            <a href=''>  <FaInstagram /></a>
                        </div>

                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="d-flex flex-row team-card " >
                    <Card.Img variant="top teampic" src={person4} />
                    <Card.Body className='team-card-detail'>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Title>TOP COURSES</Card.Title>




                        <div className='team-social-media'>
                            <a href=''>  <FaFacebookF /></a>
                            <a href=''>  <FaLinkedinIn /></a>
                            <a href=''>  <FaInstagram /></a>
                        </div>

                    </Card.Body>
                </Card>
            </Col>

        </Row>

        <Row className='team-row mt-5 pb-5' >

            <Col>
                <Card className="d-flex flex-row team-card">
                    <Card.Img variant="top teampic" src={person2} />
                    <Card.Body className='team-card-detail'>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Title>TOP COURSES</Card.Title>


                        <div className='team-social-media'>
                            <a href=''>  <FaFacebookF /></a>
                            <a href=''>  <FaLinkedinIn /></a>
                            <a href=''>  <FaInstagram /></a>
                        </div>


                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="d-flex flex-row team-card">
                    <Card.Img variant="top teampic" src={person3} />
                    <Card.Body className='team-card-detail'>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Title>TOP COURSES</Card.Title>


                        <div className='team-social-media'>
                            <a href=''>  <FaFacebookF /></a>
                            <a href=''>  <FaLinkedinIn /></a>
                            <a href=''>  <FaInstagram /></a>
                        </div>



                    </Card.Body>
                </Card>
            </Col>

        </Row>

    </Container>

);

export default Team;