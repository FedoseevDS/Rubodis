import React, { useState } from 'react'
import './styles.scss'
import cn from 'classnames'

const SCSSTransitionChannel1 = () => {
  
    const [isState1, setIsState1] = useState(false)
    const toggle1 = () => setIsState1(!isState1)
    
    const [isState2, setIsState2] = useState(false)
    const toggle2 = () => setIsState2(!isState2)

    const [isState3, setIsState3] = useState(false)
    const toggle3 = () => setIsState3(!isState3)

    const [isState4, setIsState4] = useState(false)
    const toggle4 = () => setIsState4(!isState4)

    return (

    <div className="transitionChannel1">
        <div>channel - https://www.youtube.com/watch?v=yZFg3cuq_LU&t=2s
            <p><b>https://webref.ru/css/animated_properties</b> - css стили, на который можно наложить анимацию</p>
        </div>

        <div>transition: all 1s ease 0s, color 2s ease-in 1s;
            <p>
                Параметр объединяет в себя 4 свойства:<br/><br/>
                <b>1. transition-property</b><br/>
                <b>2. transition-duration</b><br/>
                <b>3. transition-timing-function</b><br/>
                <b>4. transition-delay</b><br/><br/>
                Также в первом свойстве можно написать конкретный параметр, если нужно 2 и более параметра
                перечисляются через запятую
            </p>
        </div>
      <div>
        transition-duration: number s (ms);
        <p>
          Определяет промежуток времени, в течении которого будет происходить
          переход, также можно указывать несколько значений, но для их использования нужно подключить
          параметр <b>"transition-property"</b>
        </p>
        <button className={cn('duration', {['button1']: toggle1})} onClick={toggle1}>Наведи на меня</button>
      </div>
      <div>transition-property: all(или перечислить конкретные свойства);
      <p>
          Содержит название свойств предназначенных для перехода, значение может быть
          одно или перечисленно через <b>","</b>
        </p>
        <button className={cn('duration', {['button2']: toggle2})} onClick={toggle2}>Наведи на меня</button>
      </div>
      <div>transition-delay: number s (ms);
        <p>
            Позволяет сделать, чтобы изменение свойства произошло не моментально а с задержкой
        </p>
        <button className={cn('duration', {['button3']: toggle3})} onClick={toggle3}>Наведи на меня</button>
      </div>
      <div className='function'>transition-timing-function: ease (значение по умолчанию);
        <div className='ease'>ease</div>
        <div className='ease-in'>ease-in</div>
        <div className='ease-out'>ease-out</div>
        <div className='ease-in-out'>ease-in-out</div>
        <div className='linear'>linear</div>
        <div className='steps'>steps (int, start | end)</div>
        <div className='cubic'>cubic-bezier(x1, y1, x2, y2)</div>
        <p>
            Задает стиль (сценарий) перехода, по которому будет происходить анимация
        </p>
      </div>
    </div>
  );
};

export default SCSSTransitionChannel1;
