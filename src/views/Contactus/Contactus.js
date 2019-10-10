import React, {useState} from 'react';
import { Form } from "react-bootstrap";
import Button from '../../components/button/button'
import Title from '../../components/title/title'

import './contactus.css'

const Contactus = props => {
  const [form, setForm] = useState({name: '', email: '', message: ''})

  const changeInput = e => {
    let newValue = {...form}
      newValue[e.target.name] = e.target.value
      setForm(newValue)
  }

  const sendForm = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <div className="contactus">
        <Title className="contactus-title">
          Contact Us
        </Title>
        <Form className="contactus-form">
          <Form.Control
            type="text"
            name="name"
            className="border-dark border-2 mb-4 contactus-name"
            placeholder="Name"
            onChange={changeInput}
            value={form.firstName}
          />
          <Form.Control
            type="email"
            name="email"
            className="border-dark border-2 mb-4 contactus-email"
            placeholder="Email"
            onChange={changeInput}
            value={form.firstName}
          />
          <Form.Control
            as="textarea"
            rows="5"
            name="message"
            className="border-dark border-2 mb-4 contactus-message"
            placeholder="Message"
            onChange={changeInput}
            value={form.message}
          />
          <div className="contactus-sendButton">
            <Button onClick={sendForm}>
              Send Message
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
};

export default Contactus;
