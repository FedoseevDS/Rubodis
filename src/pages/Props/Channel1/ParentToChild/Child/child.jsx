import './styles.scss'



const Child = ({name}) => {
    return (
        <div className="dhild__main-container">
            <p>
                <i>Child component</i>
            </p>
            <span>Name is {name}</span>
        </div>
    )
}

export default Child;