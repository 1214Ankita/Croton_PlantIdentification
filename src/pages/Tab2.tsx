import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { TabBar } from './Routes';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      <TabBar />
    </IonPage>
  );
};

export default Tab2;
