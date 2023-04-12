import { useState, useEffect, SetStateAction, ReactNode, Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { getStorage, getDownloadURL } from 'firebase/storage';
import { ref as storageRef } from 'firebase/storage';
import { volumeHigh } from 'ionicons/icons';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { useParams } from 'react-router';

export const Details1: React.FC =  () => {
  const { id } = useParams<{ id: string }>();

    //
    const [plantData, setPlantData] = useState<any>(null);

  const plantI = async (id: any) => {
    const plantRef = doc(db, 'Plants', id);
    const plantDoc = await getDoc(plantRef);
    const plantData = plantDoc.data();
    setPlantData(plantData);
  }

  useEffect(() => {
    plantI(id);
  }, [id]);
    
    async function speak(text: string) {
        await TextToSpeech.speak({ text });
    }
    //

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{plantData?.p_name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <img src={plantData?.p_img} alt={plantData?.p_name} />
            <IonCardHeader>
              <IonCardTitle>{plantData?.p_name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{plantData?.p_desc}</p>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );    
}

