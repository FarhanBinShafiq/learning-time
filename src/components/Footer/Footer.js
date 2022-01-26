import React from 'react';
import logo from '../../images/logo.jpg'
import { BsFillTelephonePlusFill,BsInstagram,BsFacebook,BsBehance,BsFillEnvelopeFill,BsTwitter,BsFillGeoAltFill} from "react-icons/bs";
import { Col, Container,  Row } from 'react-bootstrap';
import './Fotter.css'

const Footer = () => {


    return (
        <Container className='footer' fluid>
            <Row >
                <Col lg={3} md={6} sm={12}>
                    <img className='footer-logo' src={logo}></img>
                </Col>

                <Col className='footer-address'lg={3} md={6} sm={12}>
                    <h4>Address</h4>
                    <p> <BsFillGeoAltFill/> 1234,Gulsan</p>
                    <p>   Dhaka, Bangladesh </p>
                    
                </Col>

                <Col lg={3} md={6} sm={12} className='footer-contacts'>
                    <h4 className='footer-contacts-heading'>Contacts</h4>
                    <p><BsFillEnvelopeFill/> Support@learningtime.com</p>
                    <p><BsFillTelephonePlusFill/>  880 123456789</p>
                </Col>

                <Col lg={3} md={6} sm={12} className='footer-full-social-media'>
                    <>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>Contact</a></li>
                            <li><a href=''>About</a></li>
                            <li><a href=''>Course</a></li>
                        </ul>

                         <div className='footer-social-media'>
                                 
                                 <ul className=''>
                                     <li><a href='https://www.facebook.com'><BsFacebook/></a></li>
                                     <li><a href='https://www.instagram.com'><BsInstagram/></a></li>
                                     <li><a href='https://www.twitter.com'><BsTwitter/> </a></li>
                                     <li><a href='https://www.behance.com'> <BsBehance/></a></li>
                                 </ul>

                                      
                         </div>

                    </>
                </Col>

            </Row>
        </Container>
    );
};

export default Footer;