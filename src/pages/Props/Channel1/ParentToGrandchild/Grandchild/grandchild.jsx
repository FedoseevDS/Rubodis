import { Context } from "../../context";
import { useContext } from "react";

const Grandchild = () => {
  
  // const { contextValue } = useContext(Context); - 2 вариант 
  
  const { name } = useContext(Context);

  return (
    <div className="child">
      <p>
        <i>Grand child Component</i>
      </p>

     {/*  <span>Name is {contextValue}</span> - 2 вариант*/}

      <span>Name is {name}</span>

      
    </div>
  );
};

export default Grandchild;
