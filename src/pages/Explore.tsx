import { IonButton, IonCol, IonContent, IonIcon, IonLabel, IonLoading, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import './Home.css';


import { TabBar } from './Routes';

import { ExploreTop } from '../components/Home/Explore/ExploreTop';
import { ExploreList } from '../components/Home/Explore/ExploreList';

const Tab2: React.FC = () => {
  return (
    <IonPage className='main-cont'>
      <IonContent className='main-cont'>
        <IonCol>
          <ExploreTop />
          <IonCol className='ion-padding'>
            <ExploreList />            
          </IonCol>
        </IonCol>
      </IonContent>
      <TabBar />
    </IonPage>
  );
};

export default Tab2;
