import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import aboutus from '../../images/aboutus.jpg'
import about1 from '../../images/about1.png'
import about2 from '../../images/about2.png'
import about3 from '../../images/about3.png'
import video from '../../images/video.png'
import ebook from '../../images/ebooks.png'
import brochures from '../../images/brochures.png'
import './About.css'

const About = () => {
    return (

        <Container className='aboutbg' fluid>
            <img src={aboutus} className='w-100 aboutusheadpic' />
            <p> </p>
            <Row  >
                <Col lg={4} md={6} sm={12}>
                    <Card className='aboutcardbody'>
                        <Card.Img variant="top aboutcardpic" src={about1} />
                        <Card.Body >
                            <Card.Title className='aboutcardtitle'>NEW CLASSES</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='aboutcardbody'>
                        <Card.Img variant="top aboutcardpic" src={about2} />
                        <Card.Body>
                            <Card.Title className='aboutcardtitle'>TOP COURSES</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className='aboutcardbody'>
                        <Card.Img variant="top aboutcardpic" src={about3} />
                        <Card.Body>
                            <Card.Title className='aboutcardtitle'>Full E-Books</Card.Title>
                            <Card.Text >
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
            </Row>


            <div className='resource'>

                <h1 className='resources-title'>Our Resources Center</h1>

                <Row className='resources-container'>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img src={video} />
                            <h5 className='resources-card-title'>Tecnical Videos</h5>
                            <br />
                            <button className='about-btn'>View Technical videos</button>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img src={ebook} />
                            <h5 className='resources-card-title' >E-Books Center</h5>
                            <br />
                            <button className='about-btn'>View E-books</button>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img src={brochures} />
                            <h5 className='resources-card-title'> All Brochures</h5>
                            <br />
                            <button className='about-btn'>View Brochures</button>
                        </div>
                    </Col>
                </Row>

            </div>



        </Container>

    );
};

export default About;