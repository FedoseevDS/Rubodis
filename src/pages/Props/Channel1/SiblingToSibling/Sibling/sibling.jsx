import './styles.scss'
import Form from "react-bootstrap/Form";

const Sibling = ({onChange}) => {

    const handleNameChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className="sibling__main-container">
            <p>
                <i>Child component</i>
            </p>

            <Form>
                <Form.Group>
                <Form.Label>Name </Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={handleNameChange}/>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Sibling;