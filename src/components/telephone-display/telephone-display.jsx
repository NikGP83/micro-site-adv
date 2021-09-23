import React, {useState } from 'react';
import InputMask from 'react-input-mask';
import './telephone-display.scss';


const TelephoneDisplay = () => {
    
    const [state, setState] = useState();

    const formHandler = (e) => {
        e.preventDefault()        
    };

    const append = (ix) => setState((state) => {
        state+= "" + ix;
        console.log(state)
        return state
    })
    
    return (
        <div className="mobile-form">
            <div className="mobile-form__wrapper">
                    <h1 className="mobile-form__call-to-action">
                        Введите ваш номер
                        мобильного телефона
                    </h1>
                    
                    <form onSubmit={formHandler} action="post" className="mobile-form__display">                        
                        <InputMask mask="+7\(999) 999-99-99" value={state} onChange={() => undefined}  alwaysShowMask="true" className="mobile-input"/>
                        <label htmlFor="mobile-tel" className="mobile-form__label">и с Вами свяжется наш менеждер для дальнейшей консультации</label>
                        <ul className="mobile-form__numbers-list">
                            {Array(10).fill().map((_, ix) => (<button key={ix} onClick={()=>append(ix)} className="numbers-btn">{ix}</button>))}
                            <li><button onClick={() => setState(state.slice(-1))} className="numbers-btn clear--btn">Стереть</button></li>
                        </ul>
                        <div className="agree-box__wrapper">
                        <input type="checkbox" id="user-agree" className="visually-hidden agree-input-checkbox"/>
                        <label htmlFor="user-agree"><p className="input-label">Согласие на обработку персональных данных</p></label>
                        </div>
                        <button className="numbers-btn send-btn">Подтвердить номер</button>
                    </form>
                    </div>
                </div>
    )
};

export default TelephoneDisplay;



