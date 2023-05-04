import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Contact Me</h1>
      <div className="container mt-5">
      <Form style={{fontSize: '20px'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  >Email address</Form.Label>
        <Form.Control size="lg" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control size="lg"  as="textarea" rows={3} />
      </Form.Group>
      <button style = {{borderRadius : "5px", paddingRight: "10px", paddingLeft: "10px"}}>Send Message</button>
    </Form>
      </div>
    </div>
  );
}
