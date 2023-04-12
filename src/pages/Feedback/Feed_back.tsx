
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonButton, IonIcon, IonRow, IonCol } from '@ionic/react';
import './Feed_back.css';
import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../../firebaseConfig';


const Feed_back: React.FC = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();

    // Create a new document in Firestore
    db.collection('feedback').add({
        name,
        email,
        message,
        // timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log('Feedback submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error:any) => {
        console.error('Error submitting feedback:', error);
    });
  }

  return (

    <IonPage>
             <IonContent class="ion-padding">
                 <IonHeader>
                 </IonHeader>
                 <div className='feed_main'>
                     <div className='cir1'></div>
                     <div className='cir2'></div>
                     <p className='feed_head'>Feedback Form</p>
                     <form method='POST' onSubmit={handleSubmit}>
                     <div className='feed_form'>
                         <IonLabel className="feed_label" position="floating" >Name</IonLabel>
                         <IonInput className="feed_input" name="firstname"  value={name} ></IonInput>  

                         <IonLabel className="feed_label" position="floating">Email ID</IonLabel>
                         <IonInput className="feed_input" name="email" value={email}  ></IonInput> 

                         <IonLabel className="feed_label" position="floating">Message</IonLabel>
                         <IonTextarea className="feed_input_area" name="message" value={message} ></IonTextarea>  
                     </div>
                     <IonButton type="submit" shape="round" class="feed_btn" onClick={()=>{alert("Submitted!")}}>Submit</IonButton><br></br>
                    
                     </form>
                 </div>

            </IonContent>
         </IonPage>
    
  );
};
export default Feed_back;


