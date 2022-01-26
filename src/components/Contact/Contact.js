import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import contact from '../../images/contactus.jpg'
import './Contact.css'

const Contact = () => {
    return (
        <Container className='form-container' fluid>
            <img className='form-img' src={contact}></img>
            <Form className=' form' >

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Type your name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Type your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>

                <Button className='form-btn'>Submit</Button>
            </Form>
        </Container>
    );
};

export default Contact;