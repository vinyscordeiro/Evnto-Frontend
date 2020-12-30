import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../Pages/SignIn';
import ForgotPassword from '../Pages/ForgotPassword';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';
import EventEditting from '../Pages/EventEditting';
import EventUse from '../Pages/EventUse';
import MyEvents from '../Pages/MyEvents';
import RecoverPassword from '../Pages/RecoverPassword';
import Profile from '../Pages/Profile';
import Participants from '../Pages/Participants';

import Error404 from '../Pages/404';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/eventeditting" component={EventEditting} />
        <Route path="/eventuse" component={EventUse} />
        <Route path="/myevents" component={MyEvents} />
        <Route path="/recoverpassword" component={RecoverPassword} />
        <Route path="/profile" component={Profile} />
        <Route path="/participants" component={Participants} />

        <Route path=""  component={Error404} />
        
    </Switch>
);

export default Routes;