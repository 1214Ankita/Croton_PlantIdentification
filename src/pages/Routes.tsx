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

const Routing: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                    <IonRouterOutlet>
                        <Route exact path="/tab1"> <Tab1 /> </Route>
                        <Route exact path="/tab2"> <Tab2 /> </Route>
                        <Route path="/tab3"> <Tab3 /> </Route>
                        <Route exact path="/login"> <Login /> </Route>
                        <Route exact path="/register"> <Register /> </Route>
                        <Route exact path="/"> <Redirect to="/login" /> </Route>
                    </IonRouterOutlet>    
            </IonReactRouter>
            {/* ---Floating Action button - camera--- */}
            <IonFab slot="fixed" horizontal="end">
                <IonFabButton>
                    <IonIcon icon={camera}></IonIcon>
                </IonFabButton>
                <IonFabList class='fab fab-scan' side='start'>
                    <IonFabButton>
                        <IonIcon icon={scan}></IonIcon>
                    </IonFabButton>
                {/* </IonFabList>
                <IonFabList class='fab fab-img' side='start'> */}
                    <IonFabButton>
                        <IonIcon icon={image}></IonIcon>
                    </IonFabButton>
                </IonFabList>
                <IonFabList class='fab fab-qrcode' side='top'>
                    <IonFabButton>
                        <IonIcon icon={qrCode}></IonIcon>
                    </IonFabButton>
                </IonFabList>

            </IonFab>
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