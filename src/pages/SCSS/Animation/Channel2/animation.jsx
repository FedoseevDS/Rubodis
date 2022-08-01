import './styles.scss';
import Chevron from './../../../../assets/svg/downChevron.svg';

const SCSSAnimationChannel2 = () => {
    return (
      <div className='commonAnimation2'>
        <div>
          channel - <b>https://www.youtube.com/watch?v=YWjuEzhPYqs</b>
        </div>
        <br />
        <div>animation: turing 10s ease-in 5s infinite alternate;</div>
        <br />
        <lu>
          <li>animation-name: turing; название анимации</li>
          <li>animation-duration: 3s; время анимации</li>
          <li>animation-timing-function: ease-in; скорость анимации </li>
          <li>animation-delay: 1s; задержка анимации</li>
          <li>animation-iteration-count: infinite; количество анимаций</li>
          <li>animation-direction: alternate; направление анимации</li>
        </lu>
        <div className="animationBlock">
          <img src={Chevron} alt="" />
        </div>
      </div>
    );
}

export default SCSSAnimationChannel2;