import { useState } from "react";
import Form from "react-bootstrap/Form";
import Child from "../Child/child";
import "./styles.scss";

const Parent = () => {

    const [name, setName] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

  return (
    <div className="parent__main-contact">
      <p>
        <i>Parent component</i>
      </p>
      <Form>
        <Form.Group>
          <Form.Label>Name </Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={handleNameChange}/>
        </Form.Group>
      </Form>

      <Child name={name}/>
    </div>
  );
};

export default Parent;
