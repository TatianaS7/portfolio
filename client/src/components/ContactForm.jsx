import React, { useState } from "react";
import axios from "axios";
import apiURL from "../api";
import "../styles/ContactForm.css";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "react-bootstrap";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeeobdjb");
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button className="form-button" type="submit" variant="primary" disabled={state.submitting}>
          Submit
        </Button>
      </form>
    </div>
  );
}
