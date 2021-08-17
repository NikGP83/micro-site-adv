import React from 'react';
import TelephoneDisplay from '../telephone-display/telephone-display';
import './appointment-form.scss';

const AppointmentForm = () => {

   
    return (
        <main>
            <section className="app_form">
                <TelephoneDisplay />
                <div className="app_form__adv_img">
                    <div className="close-form"></div>
                    <div className="qr-code">
                        <p className="qr_code__text">Сканируйте QR-код для получения дополнительной информации</p>
                        <img src="./img/index_1.png" alt="qr-код" />
                    </div>
                </div>
            </section>
        </main>
    )
};

export default AppointmentForm;