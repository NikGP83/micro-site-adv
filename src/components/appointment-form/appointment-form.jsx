import React from 'react';
import TelephoneDisplay from '../telephone-display/telephone-display';
import './appointment-form.scss';

const AppointmentForm = () => {


    return (
        <main className="main-page">
            <section className="app_form">
                <TelephoneDisplay />
                <div className="advant">
                    <button type="button" className="form-close">
                        <span className="visually-hidden">Закрыть</span>
                    </button>
                    <div className="qr-code">
                        <p className="qr_code__text">Сканируйте QR-код для получения дополнительной информации</p>
                        <div className="qr_code__img">
                            <img src="./img/index_1.png" alt="qr-код" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default AppointmentForm;