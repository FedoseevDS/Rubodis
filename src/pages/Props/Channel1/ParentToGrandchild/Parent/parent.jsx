import Child from '../Child/child';
import Form from 'react-bootstrap/Form';
import { Context } from '../../context';
import { useContext } from 'react';

const Parent4 = () => {

    // const { contextValue } = useContext(Context) - 2 вариант

    // const handleChange = (event) => {
    //     contextValue.setName(event.target.value)
    // }    
    
    const { setName } = useContext(Context)

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div className="parent__main-container">
            <p>
                <i>Parent Component</i>
            </p>

            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' onChange={handleChange}/>
                </Form.Group>
            </Form>

            <Child />

        </div>
    )
}

export default Parent4;