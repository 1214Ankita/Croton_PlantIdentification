import { IonButton, IonContent, IonLoading, IonPage } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { logoutuser } from '../../firebaseConfig';
import './Home.css';
import { HomeTop } from '../../components/Home/HomeTop';
import { HomeList } from '../../components/Home/HomeList';

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
        <HomeTop/>
      <IonContent class='ion-padding'>
        <IonLoading message="Logging out..." duration={0} isOpen={busy} />
        <HomeList />
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
