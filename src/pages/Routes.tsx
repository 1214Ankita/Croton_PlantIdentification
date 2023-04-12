import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonSpinner,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { home, cube, person, camera, scan, qrCode, image } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './Home/Home';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../firebaseConfig'
import { useDispatch } from 'react-redux';
import './Routes.css'
import { QRcam } from '../components/Capac';
import {Settings} from './Settings/Settings';
import { Privacy } from '../components/Settings/Privacy';
import { Help } from '../components/Settings/Help';
import { About } from '../components/Settings/About';
import { Info } from './Info/Info';
import MainQuiz from './Quiz/MainQuix';
import { Details1} from '../components/pract/Details';
import Feed_back from './Feedback/Feed_back';
import UProf  from './Profile/UProf';

const Routing: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/tab1"> <Tab1 /> </Route>
                    <Route exact path="/tab2"> <Tab2 /> </Route>
                    <Route exact path="/tab3"> <Tab3 /> </Route>
                    <Route exact path="/qr"> <QRcam /> </Route>
                    <Route exact path="/info"> <Info /> </Route>
                    <Route exact path="/details/:id"><Details1 /></Route>
                    {/* <Route exact path="/details/102"><Details2/></Route>
                    <Route exact path="/details/103"><Details3/></Route>
                    <Route exact path="/details/104"><Details4/></Route> */}
                    <Route exact path="/plantquiz"> <MainQuiz /> </Route>
                    <Route exact path="/uprof"> <UProf /> </Route>
                    <Route exact path="/feedback"><Feed_back/></Route>
                    <Route exact path="/settings"><Settings/></Route>
                    <Route exact path="/priv"> <Privacy /> </Route>
                    <Route exact path="/help"> <Help /> </Route>
                    <Route exact path="/about"> <About /> </Route>
                    <Route exact path="/login"> <Login /> </Route>
                    <Route exact path="/register"> <Register /> </Route>
                    <Route exact path="/"> <Redirect to="/login" /> </Route>
                </IonRouterOutlet>
            </IonReactRouter>         
        </IonApp>
    );
}

export const TabBar: React.FC = () => {
    return <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={cube} />
            <IonLabel>Explore</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
        </IonTabButton>
    </IonTabBar>
}

export const Auth: React.FC = () => {
    const [busy, setBusy] = useState(true)
    const dispatch = useDispatch();


    useEffect(() => {
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
    }, [])
    return <IonApp>{busy ? <IonSpinner /> : <Routing />}</IonApp>

}