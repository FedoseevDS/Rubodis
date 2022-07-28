import './styles.scss';

const arr =[
    {name: 'onChange', text: ''},
    {name: 'event.target.value', text: ''},
    {name: 'createContext', text: ''},
    {name: 'isActive', text: ''},
    {name: 'react-router-dom', text: ''},
    {name: 'react', text: 'фреймворк, написанный на JS'},
    {name: 'nodejs', text: 'программа для работы с JS'},
    {name: 'npm', text: 'служит менеджером между JS and NodeJS, а именно устанавливает модули'},
    {name: 'npx', text: 'служит для установки и запуска модулей'},
    {name: 'map', text: 'метод'},
    {name: 'map', text: 'метод'},
    {name: 'onMouseEnter', text: 'что произойдет при наведении мышки на элемент'},
    {name: 'onMouseLeave', text: 'что произойдет если мышку убрать с элемента'},
]


const Home = () => {
    return (
        <div className="home">
            Прочитать и дать пояснения
                {arr.map(({name, text}) => {
                    return (
                    <div>{name} - {text}</div>
                )})}
        </div>
    )
}

export default Home;