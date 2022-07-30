import './styles.scss';
import { useState } from 'react';
import { Transition } from 'react-transition-group';

const AnimationChannel1 = () => {

    const [loaderVisible, setLoaderVisible] = useState(false)

    return (
        <div className="animationChannel1"> channel - https://www.youtube.com/watch?v=7MMRcMutqpI 
        
        <p>ссылка на модуль npm install react-transition-group --save - <b>https://reactcommunity.org/react-transition-group/</b></p>
        <p>код для установки модуля - <b>npm install react-transition-group --save</b></p>
            <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? 'hide' : 'show'}</button>
            <div className="wrap">
                <Transition
                    in={loaderVisible}
                    timeout={10000}
                    // mountOnEnter
                    // unmountOnExit
                >
                    {state => (<div className={`circle ${state}`}/>)}
                </Transition>
                
            </div>
        </div>
    )
}

export default AnimationChannel1;