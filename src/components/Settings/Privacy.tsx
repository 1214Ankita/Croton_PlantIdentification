import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Privacy.css'

export const Privacy: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Privacy and Security</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle></IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem className='priv-item'>Many privacy laws around the world require businesses to provide their customers with a Privacy Policy. Privacy law is becoming stricter all the time, and intrusive mobile technology is a big reason for this.At the forefront of the consumer privacy landscape is the data collection, sharing and usage of user data on websites and by mobile apps.</IonItem>
                        <IonItem>Recent high profile media attention, class action lawsuits and dependence on mobile devices have prompted close scrutiny of developer, advertisers and platform practices and controls. Regulators on the state, national and international level are actively encouraging, and enforcing consumer privacy rights against app developers that misuse or surreptitiously access user data. Developers should build privacy into their mobile apps from the start in order to foster trust and confidence in the mobile app ecosystem.</IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

