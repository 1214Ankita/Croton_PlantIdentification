import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { TabBar } from './Routes';
import './Tab3.css';
import { Recog } from '../Recog';
import { Info } from './Info/Info';
import { PQuiz } from './Quiz/Quiz';
import { QrPract } from '../components/Settings/Qr';
import Profile from './Profile/Profile';
import { QRcam } from '../components/Capac';
import UProf  from './Profile/UProf';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <Profile/>
      </IonContent>
      <TabBar/>
    </IonPage>
  );
};

export default Tab3;
