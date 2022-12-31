import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonSelect,IonSelectOption,IonTextarea,IonButton} from '@ionic/react';
import './Verifyemail.css';

const Verifyemail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      
          
      </IonHeader>

      <IonContent class="ion-padding">
        <IonHeader>

       
        </IonHeader>
        <p>Verify Email</p>
        <h6>Enter the Verification code we just sent to your  email address</h6>
       
  
        <IonList class="input-text">
        <IonItem lines="none">
            <IonLabel class="label" position="stacked" >Verfication Code</IonLabel>
            <IonInput class="input" placeholder='Enter'></IonInput>
            
          </IonItem>

          <IonButton shape="round"  class="btn">Submit</IonButton>
          </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Verifyemail;