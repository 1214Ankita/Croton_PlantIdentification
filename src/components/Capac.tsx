import { useState, useEffect, SetStateAction, ReactNode, Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

import { Capacitor } from '@capacitor/core';
import Plugins from '@capacitor/core';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonIcon, IonPage, IonRow } from '@ionic/react';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

import './Capac.css'
import { volumeHigh } from 'ionicons/icons';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { useHistory } from 'react-router';

export const QRcam: React.FC = () => {
    const history = useHistory()
    const [qrData, setQRData] = useState('');
    const [rows, setRows] = useState<any | null>([]);

    const startScan = async () => {
        console.log("running")
        await BarcodeScanner.checkPermission({ force: true });
        BarcodeScanner.hideBackground();
        const result = await BarcodeScanner.startScan();
        console.log("result")
        if (result.hasContent) {
            console.log(result.content);
            setQRData(result.content!)
        }
    };

    const stopScan = () => {
        BarcodeScanner.showBackground();
        BarcodeScanner.stopScan();
    };

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

    return (
        <IonPage className='camera-container'>
            <IonButton onClick={startScan}>Start scan</IonButton>
            <IonCol>
                {rows.map((row: {
                    p_bot: ReactNode;
                    p_desc: ReactNode; id: Key | null | undefined; p_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                }) => {
                    if (row.id == qrData)
                        return (<><IonRow className='qr-msg'>Scanned successfully!</IonRow>
                            <img className='qr-msgimg' src='https://media4.giphy.com/media/3FJcVn6tgFcP8LjwYW/giphy.webp?cid=ecf05e47a35hjg6zvne33jxruzvsnzo4rkiezxdlgopr1bp6&rid=giphy.webp&ct=s' alt='yeah!' />
                            <IonCard className='qr-card'>
                                <img className='qr-image' src='https://images.unsplash.com/photo-1618679639167-41f5df274ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvc2VtYXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="plants" />
                                <IonCardHeader className='qr-header'>
                                    <IonCardTitle className='qr-title' key={row.id}>{row.p_name}</IonCardTitle>

                                </IonCardHeader>
                                <IonCardContent className='qr-bot'>Botanical Name:{row.p_bot}</IonCardContent>
                                <IonCardContent className='qr-desc'>{row.p_desc} </IonCardContent>
                            </IonCard>
                            <IonButton onClick={(event) => {
                                event.preventDefault();
                                history.push('/info')
                            }}>More Info</IonButton></>)
                    else
                        <IonCard className='qr-card'>Error not found</IonCard>
                })}
            </IonCol>

        </IonPage>
    )
}