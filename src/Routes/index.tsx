import React from 'react';
import { Routes, Route } from 'react-router-dom';

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

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/eventeditting" element={<EventEditting />} />
        <Route path="/eventuse" element={<EventUse />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
);

export default AppRoutes;