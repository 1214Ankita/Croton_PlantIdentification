import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonButton } from '@ionic/react';
import './Forgetpass.css';

const Forgetpass: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="ion-padding">
        <IonHeader>
        </IonHeader>
        <div className='main'>
          <div className='header'>
            <p>Reset Password</p>
            <h6>Please Enter your Email ID to reset your password</h6>
          </div>

          <div className="main-content">
            <IonList class="input-text">
              <IonItem lines="none">
                <IonLabel class="label" position="stacked" >Enter Email</IonLabel>
                <IonInput class="input" placeholder='Enter'></IonInput>

              </IonItem>

              <IonButton shape="round" class="btn">Submit</IonButton>
            </IonList>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Forgetpass;