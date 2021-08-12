import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppointmentForm from '../appointment-form/appointment-form';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <AppointmentForm />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
