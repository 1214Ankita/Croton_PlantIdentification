import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonRouterOutlet,
    IonSpinner,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './Home';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { Login } from './Login/Login';
import './Tabs.css';
import { Register } from './Register/Register';
import { useCallback, useEffect, useState } from 'react';
import { getCurrentUser } from '../firebaseConfig'
import { useDispatch } from 'react-redux';
import { Tabs } from './Tabs';

const Routing: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/tab1"> <Tab1 /> </Route>
                    <Route exact path="/tab2"> <Tab2 /> </Route>
                    <Route exact path="/tab3"> <Tab3 /> </Route>
                    <Route exact path="/tabs"> <Tabs /> </Route>
                    <Route exact path="/login"> <Login /> </Route>
                    <Route exact path="/register"> <Register /> </Route>
                    <Route exact path="/"> <Redirect to="/login" /> </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
}

export const Auth: React.FC = () => {
    const [busy, setBusy] = useState(true)
    const dispatch = useDispatch();

    const verifyLogin = useCallback(() => {
        getCurrentUser().then((user: any) => {
            console.log(user)

            if (user) {
                dispatch({
                    type: 'USER_STATE',
                    payload: user.email,
                });
                window.history.replaceState({}, '', '/tab1')
            } else {
                window.history.replaceState({}, '', '/')
            }
            setBusy(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        verifyLogin()
    }, [verifyLogin])
    return <IonApp>{busy ? <IonSpinner /> : <Routing />}</IonApp>

}