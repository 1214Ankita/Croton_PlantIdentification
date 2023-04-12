import { IonButton, IonCol, IonContent, IonIcon, IonLabel, IonLoading, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import './Home.css';
import { HomeTop } from '../../components/Home/HomeTop';
import { HomeList } from '../../components/Home/HomeList';

import { TabBar } from '../Routes';
import { Fab } from '../../components/Fab';
import { Settings } from '../Settings/Settings';

const Tab1: React.FC = () => {
  return (
    <IonPage className='main-cont'>
      <IonContent className='main-cont'>
        <IonCol>
          <HomeTop />
          <IonCol className='ion-padding'>
            <HomeList />            
          </IonCol>
        </IonCol>
      </IonContent>
      <TabBar />
      <Fab />
    </IonPage>
  );
};

export default Tab1;
