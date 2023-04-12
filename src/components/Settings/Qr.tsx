//how to get qr id after scanning qr code?

import { useState, useEffect, SetStateAction, ReactNode, Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


import { Capacitor } from '@capacitor/core';
import Plugins from '@capacitor/core';
import '../Capac.css'
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonIcon, IonItem, IonPage, IonRow } from '@ionic/react';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { volumeHigh } from 'ionicons/icons';

export const QrPract: React.FC = () => {
    // const [qrData, setQRData] = useState('');
    const qrData = 101;
    const [rows, setRows] = useState<any | null>([]);

    // const { StatusBar } = Plugins;
    // const ScanPage: React.FC = () => {
    //     if (Capacitor.isPluginAvailable('StatusBar')) {
    //         StatusBar.setBackgroundColor({ color: '#3880ff' });
    //     }


    // const handleScan = async (data: SetStateAction<string>) => {
    //     if (data) {
    //         setQRData(data);
    //         const response = await axios.get(`/api/rows/${data}`);
    //         setRowData(response.data);
    //     }

    // };
    // const handleError = (err: any) => {
    //     console.error(err);
    // };

    const startScan = async () => {
        console.log("running")
        await BarcodeScanner.checkPermission({ force: true });
        BarcodeScanner.hideBackground();
        const result = await BarcodeScanner.startScan();
        console.log("result")
        if (result.hasContent) {
            console.log(result.content);
            // setQRData(result.content!)
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
        // JSON.stringify(rows)
        console.log(rows)
    }
    //     return (
    //         <IonPage>
    //             <IonContent>
    //                 {rowData && (
    //                     <div>
    //                         {/* <p>Name: {rowData.name}</p>
    //                         <p>Email: {rowData.email}</p>
    //                         <p>Phone: {rowData.phone}</p> */}
    //                     </div>
    //                 )}
    //             </IonContent>
    //         </IonPage>
    //     );
    // };
    return (
        <IonPage className='camera-container' >
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
                                    <IonButton className='qr-voice'><IonIcon icon={volumeHigh}></IonIcon></IonButton>
                                </IonCardHeader>
                                <IonCardContent className='qr-bot'>Botanical Name:{row.p_bot}</IonCardContent>
                                <IonCardContent className='qr-desc'>{row.p_desc} </IonCardContent>
                            </IonCard></>)
                    else
                        <IonCard className='qr-card'>Error not found</IonCard>
                })}
            </IonCol>
            <IonButton>More Info</IonButton>
        </IonPage>
    )
}