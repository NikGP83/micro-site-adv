import React from 'react';
import TelephoneDisplay from '../telephone-display/telephone-display';

const AppointmentForm = () => {


    return (
        <main>
            <section className="app-form">
                <TelephoneDisplay />
                <div className="app-form__adv-img">
                    <div className="close-form"></div>
                    <div className="qr-code">
                        <p className="qr-code__text">Сканируйте QR-код для получения дополнительной информации</p>
                        <img src="./img/index_1.png" alt="qr-код" />
                    </div>
                </div>
            </section>
        </main>
    )
};

export default AppointmentForm;