import react, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  let submitComment = (e) => {
    console.log('Submitting');
    e.preventDefault();
     const name = nameRef.current.value;
     const email = emailRef.current.value;
     const comment = commentRef.current.value;
     console.log(comment);
    setFormSubmitted(true);
  }
  return (
    <react.Fragment>
      {formSubmitted && <react.Fragment>
        <h1>Thank you!</h1>
        <p>Your comment has been submitted</p>
    </react.Fragment>}
    {!formSubmitted && <react.Fragment>
      <h1>Contact</h1>
      <p>I would love to hear your thoughts!</p>
      <Form onSubmit={submitComment}>
        <Form.Group className="mb-3" controlId="contact-form-name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="name" ref={nameRef} placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-form-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" ref={emailRef} placeholder="someone@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-form-comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control required as="textarea" ref={commentRef} placeholder="Comment" rows={3} />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </react.Fragment>}
    </react.Fragment>
    
  );
}
export default Contact;
