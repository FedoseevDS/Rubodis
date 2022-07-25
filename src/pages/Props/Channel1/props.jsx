import Parent from "./ParentToChild/Parent/parent";
import Parent2 from "./ChildToParent/Parent/parent";
import Parent3 from "./SiblingToSibling/Parent/parent";
import Parent4 from "./ParentToGrandchild/Parent/parent";
import { useState } from "react";
import { Context } from "./context";

// https://www.youtube.com/watch?v=Cc2n4EOUzW4

const PropsChannel1 = () => {
  const [name, setName] = useState();

  return (
    <>
      <Context.Provider value={{ name, setName }}>
        <Parent />
        <hr />
        <Parent2 />
        <hr />
        <Parent3 />
        <hr />
        <Parent4 />
      </Context.Provider>
    </>
  );
};

export default PropsChannel1;
