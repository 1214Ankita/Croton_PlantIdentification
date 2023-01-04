import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonSelect,IonSelectOption,IonTextarea,IonButton} from '@ionic/react';
import "./Newpass.css";

const Newpass: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      
          
      </IonHeader>

      <IonContent class="ion-padding">
        <IonHeader>

       
        </IonHeader>
        <p className="newpass_head">Create New Password</p>
        <h6 className="new_subpass_head">Your new password must be different from the previously used password </h6>
       
  
        <IonList class="input-text" lines="none">
        <IonItem>
            <IonLabel className='newpass_label' position="stacked" >New Password</IonLabel>
            <IonInput className="newpass_input" placeholder='Enter new password'></IonInput>
            
          </IonItem>

          <IonItem>
            <IonLabel className="newpass_label" position="stacked" >Confirm Password</IonLabel>
            <IonInput className="newpass_input" placeholder='Enter new password'></IonInput>
            
          </IonItem>

          <IonButton shape="round" className="btn">Submit</IonButton>
          </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Newpass;