import { useState } from 'react';
import Subling from '../Sibling/sibling';
import Subling2 from '../Sibling2/sibling2';

const Parent3 = () => {

    const [name, setName] = useState('')
    const handleNameChange = (name) => {
        setName(name)
    }

    return (
        <div className="parent__main-cintainer">
            <p>
                <i>Parent component</i>
            </p>

            <Subling onChange={handleNameChange} />
            <Subling2 name={name}/>

        </div>
    )
}

export default Parent3;