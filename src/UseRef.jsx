import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
    <Container>
      <Row className="justify-content-center">
      <h1>1. What is UseRef Hook ?(Implementation)
</h1>
<h4>Ans- The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</h4>
     <Col  md={4} className="text-center mt-2">
     <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      </Col> 
      </Row>
    </Container>
 
    </>
  );
}

export default UseRef;