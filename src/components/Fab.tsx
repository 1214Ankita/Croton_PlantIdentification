import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { camera, image, qrCode, scan } from "ionicons/icons";
import { startScan, usePhotoGallery } from '../components/Capac';



export const Fab: React.FC = () => {
    const { photos, takePhoto } = usePhotoGallery();
    return (
        <IonFab slot="fixed" horizontal="end">
            <IonFabButton>
                <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
            <IonFabList className='fab fab-scan' side='start'>
                <IonFabButton>
                    <IonIcon icon={scan}></IonIcon>
                </IonFabButton>
            </IonFabList>
            <IonFabList className='fab fab-img' side='start'>
                <IonFabButton>
                    <IonIcon icon={image}></IonIcon>
                </IonFabButton>
            </IonFabList>
            <IonFabList className='fab fab-qrcode' side='top'>
                <IonFabButton >
                    <IonIcon icon={qrCode}></IonIcon>
                </IonFabButton>
            </IonFabList>
        </IonFab>
    );
}