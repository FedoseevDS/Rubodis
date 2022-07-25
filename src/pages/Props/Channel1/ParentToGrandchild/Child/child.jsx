import Grandchild from '../Grandchild/grandchild';

const Child = () => {
    return (
        <div className="child">
            <p>
                <i>Child Component</i>
            </p>

            <Grandchild />
        </div>
    )
}

export default Child;