import React from 'react';
import './telephone-display.scss';


const TelephoneDisplay = () => {
    const formHandler = (e) => {
        e.preventDefault()
    }

    const getCons = (e) => {
        console.log(e.target.dataset.num)
    }
    return (
        <div className="mobile_form">
                    <h1 className="mobile-form__call-to-action">
                        Введите ваш номер
                        мобильного телефона
                    </h1>
                    <form onSubmit={formHandler} action="post" className="mobile-form__display">
                        <input type="tel" id="mobile-tel"/>
                        <label htmlFor="mobile-tel" className="mobile-form__label">и с Вами свяжется наш менеждер для дальнейшей консультации</label>
                        <ul onClick={getCons} className="mobile-form__numbers">
                            <li><button data-num="1" className="numbers-btn">1</button></li>
                            <li><button data-num="2" className="numbers-btn">2</button></li>
                            <li><button data-num="3" className="numbers-btn">3</button></li>
                            <li><button data-num="4" className="numbers-btn">4</button></li>
                            <li><button data-num="5" className="numbers-btn">5</button></li>
                            <li><button data-num="6" className="numbers-btn">6</button></li>
                            <li><button data-num="7" className="numbers-btn">7</button></li>
                            <li><button data-num="8" className="numbers-btn">8</button></li>
                            <li><button data-num="9" className="numbers-btn">9</button></li>
                            <li><button data-num="delete" className="numbers-btn">Стереть</button></li>
                            <li><button data-num="0" className="numbers-btn">0</button></li>
                        </ul>
                        <input type="checkbox" id="user-agree"/>
                        <label htmlFor="user-agree">Согласие на обработкуперсональных данных</label>
                        <button className="mobile-form__send-btn">Подтвердить номер</button>
                    </form>
                </div>
    )
};

export default TelephoneDisplay;
