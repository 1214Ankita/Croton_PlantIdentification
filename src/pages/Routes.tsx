import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonFab,
    IonFabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonSpinner,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { home, cube, person, camera } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './Home/Home';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../firebaseConfig'
import { useDispatch } from 'react-redux';
import './Routes.css'

const Routing: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/tab1"> <Tab1 /> </Route>
                        <Route exact path="/tab2"> <Tab2 /> </Route>
                        <Route path="/tab3"> <Tab3 /> </Route>
                        <Route exact path="/login"> <Login /> </Route>
                        <Route exact path="/register"> <Register /> </Route>
                        <Route exact path="/"> <Redirect to="/login" /> </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
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
                </IonTabs>
            </IonReactRouter>
            <IonFab slot="fixed" horizontal="end">
                <IonFabButton>
                    <IonIcon icon={camera}></IonIcon>
                </IonFabButton>
            </IonFab>
        </IonApp>
    );
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