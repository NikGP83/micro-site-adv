import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppointmentForm from '../appointment-form/appointment-form';
import PromoVideoPage from '../promo-video-page/promo-video-page';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PromoVideoPage />
                </Route>
                <Route exact path="/appointment-form">
                    <AppointmentForm />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
