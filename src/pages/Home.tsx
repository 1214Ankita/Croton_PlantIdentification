import { IonButton, IonContent, IonFooter, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { logoutuser } from '../firebaseConfig';
import './Home.css';
import { Tabs } from './Tabs';

const Tab1: React.FC = () => {
  const username = useSelector((state: any) => state.AppReducer.user.username);
  const history = useHistory()
  const [busy, setBusy] = useState(false)

  async function logout(){
    setBusy(true)
    await logoutuser()
    setBusy(false)
    history.replace('/')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonLoading message="Logging out..." duration={0} isOpen={busy}/>
        <ExploreContainer name="Tab 1 page" />
        <p>{username}</p>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <Tabs />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
