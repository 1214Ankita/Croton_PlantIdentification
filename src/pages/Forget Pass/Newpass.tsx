import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonSelect,IonSelectOption,IonTextarea,IonButton} from '@ionic/react';

const Newpass: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      
          
      </IonHeader>

      <IonContent class="ion-padding">
        <IonHeader>

       
        </IonHeader>
        <p>Create New Password</p>
        <h6>Your new password must be different from the previously used password </h6>
       
  
        <IonList class="input-text" lines="none">
        <IonItem>
            <IonLabel class="label" position="stacked" >New Password</IonLabel>
            <IonInput class="input" placeholder='Enter new password'></IonInput>
            
          </IonItem>

          <IonItem>
            <IonLabel class="label" position="stacked" >Confirm Password</IonLabel>
            <IonInput class="input" placeholder='Enter new password'></IonInput>
            
          </IonItem>

          <IonButton shape="round"  class="btn">Submit</IonButton>
          </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Newpass;