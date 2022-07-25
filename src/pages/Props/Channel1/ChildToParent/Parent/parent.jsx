import { useState } from "react";
import Child from "../Child/child";
import "./styles.scss";

const Parent2 = () => {

  const [name, setName] = useState('')

  const handleNameChange = (name) => {
    setName(name)
  }

  return (
    <div className="parent__main-contact">
      <p>
        <i>Parent component</i>
      </p>
      <span>Name is {name}</span>

      <Child onChange={handleNameChange}/>
    </div>
  );
};

export default Parent2;
