import "./styles.scss";
import { useState } from 'react'
import cn from 'classnames'

const Classname = () => {

    const [isOpen, setIsOpen] = useState(false)
    const onClickHeader =()=> setIsOpen(!isOpen)

  return (
    <div className="app">
      <h4>channel - https://www.youtube.com/watch?v=tw6U-JszZJI<br/>
          resours - https://github.com/JedWatson/classnames
      </h4>
      
      <h3>
        Conditional styling using <b>ClassNames</b> package in ReactJS
      </h3>
      <div className="box">
        <p className="title"
        onClick={onClickHeader}>
          Click me! <i className="arrow-up"></i>
        </p>
        <div className={cn('description', {'description-active':isOpen, 'green-active': isOpen})}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit, doloremque. Sapiente laudantium porro ab voluptatibus
          similique, vel rerum optio molestias?
        </div>
      </div>
    </div>
  );
};

export default Classname;
