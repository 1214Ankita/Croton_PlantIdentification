import { useState, useEffect, SetStateAction, ReactNode, Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { getStorage, getDownloadURL } from 'firebase/storage';
import { ref as storageRef } from 'firebase/storage';
import { volumeHigh } from 'ionicons/icons';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import './Info.css';
import { useHistory } from 'react-router';

export const Info: React.FC = () => {
    const history = useHistory()
    const [qrData, setQRData] = useState('');
    const [rows, setRows] = useState<any | null>([]);

    const plantsInfo = collection(db, "Plants")
    useEffect(() => {
        getPlants();
    }, []);
    const getPlants = async () => {
        const data = await getDocs(plantsInfo);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(rows)
    }
    //
    
    async function speak(text: string) {
        await TextToSpeech.speak({ text });
    }
    //

    return (
        <IonPage>
            <IonCol>

                {rows.map((row: {
                    p_ar: string | undefined;
                    p_imgg: any;
                    p_brief: ReactNode;
                    p_img1: string | undefined;
                    p_img: string | undefined;
                    p_bot: ReactNode;
                    p_desc: ReactNode; id: Key | null | undefined; p_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                }) => {
                    if (row.id == 101)
                        return (<IonContent><IonHeader collapse="condense">
                            <IonToolbar className='info-title'>
                                <IonTitle size="large">Know More!</IonTitle>
                            </IonToolbar>
                        </IonHeader>

                            <img className='info-img' src={row.p_img?.replace(/['"]+/g, '')} alt="plant" />
                            <IonItem className='info-name' key={row.id}>{row.p_name}<IonIcon icon={volumeHigh} className='info-voice' onClick={() => { speak("Hi I am" + row.p_name + "Nice to meet you") }}></IonIcon></IonItem>

                            <IonCol className='info-main'>
                                <p className='info-brief'>{row.p_brief}</p>
                                <img className='info-msg' src={row.p_imgg.replace(/['"]+/g, '')} alt="plant" />
                                <IonItem className='qr-bot'>Botanical Name:{row.p_bot}</IonItem>
                                <IonItem className='qr-desc'>{row.p_desc} </IonItem>
                            </IonCol>
                            <IonRow className='info-btns'><IonButton href={row.p_ar}>AR View</IonButton><IonButton onClick={(event) => {
                                event.preventDefault();
                                history.push('/plantquiz')
                            }}>Quiz</IonButton></IonRow>
                        </IonContent>)

                    else
                        <IonCard className='qr-card'>Error not found</IonCard>

                })}
            </IonCol>

        </IonPage>
    )
}

