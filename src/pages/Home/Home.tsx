
import { IonButton, IonContent, IonIcon, IonLabel, IonLoading, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router';

import { logoutuser } from '../../firebaseConfig';
import './Home.css';
import { HomeTop } from '../../components/Home/HomeTop';
import { HomeList } from '../../components/Home/HomeList';
import { IonReactRouter } from '@ionic/react-router';
import { Register } from '../Register/Register';
import Tab3 from '../Tab3';
import Tab2 from '../Tab2';
import { Login } from '../Login/Login';
import { cube, home, person } from 'ionicons/icons';
import { TabBar } from '../Routes';


const Tab1: React.FC = () => {
  const history = useHistory()
  const [busy, setBusy] = useState(false)

  async function logout() {
    setBusy(true)
    await logoutuser()
    setBusy(false)
    history.replace('/')
  }
  return (
    <IonPage>
      <IonContent>
        <HomeTop />
        <IonContent class='ion-padding'>
          <IonLoading message="Logging out..." duration={0} isOpen={busy} />
          <HomeList />
          <IonButton onClick={logout}>Logout</IonButton>
        </IonContent>
      </IonContent>
      <TabBar />
    </IonPage>
  );
};

export default Tab1;
