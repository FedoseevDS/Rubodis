import "./styles.scss";

const Sibling2 = ({name}) => {

  return (
    <div className="parent__main-contact">
      <p>
        <i>Parent component</i>
      </p>
      <span>Name is {name}</span>
    </div>
  );
};

export default Sibling2;
