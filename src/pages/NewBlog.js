import react, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import blogPostContents from "../content/BlogPostContents";

function NewBlog() {
    const newBlogObj = {};
  const titleRef = useRef();
  const locationRef = useRef();
  const tagsRef = useRef();
  const date = useRef();
  const image = useRef();
  const subText = useRef();
  const isBlogPost = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const postContents = blogPostContents;
  let submitComment = (e) => {
    console.log('Submitting');
    e.preventDefault();
     newBlogObj.title = titleRef.current.value;
     newBlogObj.location = locationRef.current.value;
     newBlogObj.tags = tagsRef.current.value;
     newBlogObj.date = date.current.value;
     newBlogObj.imageLink = image.current.value;
     newBlogObj.subText = subText.current.value;
     newBlogObj.isBlogPost = isBlogPost.current.value === "true"? true : false;

     if(postContents && postContents[newBlogObj.location]){
         postContents[newBlogObj.location].push(newBlogObj);
     }

     console.log(newBlogObj);
    setFormSubmitted(true);
  }
  return (
    <react.Fragment>
      {formSubmitted && <react.Fragment>
        <h1>Thank you!</h1>
    </react.Fragment>}
    {!formSubmitted && <react.Fragment>
      <h1>Create a New Post</h1>
      <Form onSubmit={submitComment}>
        <Form.Group className="mb-3" controlId="contact-form-title">
          <Form.Label>Title</Form.Label>
          <Form.Control required type="text" ref={titleRef} placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-form-location">
          <Form.Label>Location</Form.Label>
          <Form.Control required type="text" ref={locationRef} placeholder="Location" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-form-isBlogPost">
          <Form.Label>Is this a blog post?</Form.Label>
          <Form.Control type="text" ref={isBlogPost} placeholder="true" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-form-tags">
          <Form.Label>Tags</Form.Label>
          <Form.Control type="text" ref={tagsRef} placeholder="Tags - comma separated" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-form-image">
          <Form.Label>Title Image</Form.Label>
          <Form.Control type="text" ref={image} placeholder="Image Link" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-form-subText">
          <Form.Label>SubText</Form.Label>
          <Form.Control type="text" ref={subText} placeholder="subText" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-form-date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" ref={date} placeholder="Date" />
        </Form.Group>
        

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </react.Fragment>}
    </react.Fragment>
    
  );
}
export default NewBlog;
