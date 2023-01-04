import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonButton } from '@ionic/react';
import "./Verifyemail.css";

const Verifyemail: React.FC = () => {
  return (
    <IonPage>

      <IonContent class="ion-padding">
        <IonHeader></IonHeader>
        <p className='verify_head'>Verify Email</p>
        <h6 className='verify_subhead'>Enter the Verification code we just sent to your  email address</h6>


        <IonList className="verify_input_text">
          <IonItem lines="none">
            <IonLabel className='verify_label' position="stacked" >Verfication Code</IonLabel>
            <IonInput className='verify_input' placeholder='Enter'></IonInput>

          </IonItem>
          
          <IonButton shape='round' className='verify_btn'>Submit</IonButton>
        </IonList>


      </IonContent>
    </IonPage>
  );
};

export default Verifyemail;