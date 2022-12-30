import {
    IonIcon,
    IonLabel,
    IonPage,
    IonTabBar,
    IonTabButton,
} from '@ionic/react';
import { home, cube, person } from 'ionicons/icons';
import './Tabs.css';

export const Tabs: React.FC = () => (
    <IonPage>
        <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1" selected>
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={cube} />
                <IonLabel>Explore</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={person} />
                <IonLabel>Person</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonPage>
);


