import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { camera, image, qrCode, scan } from "ionicons/icons";
// import { startScan, usePhotoGallery } from '../components/Capac';
import { useHistory } from "react-router";
import { QRcam } from "./Capac";



export const Fab: React.FC = () => {

    const history = useHistory();

    // const { photos, takePhoto } = usePhotoGallery();
    return (
        <IonFab slot="fixed" horizontal="end">
            <IonFabButton onClick={(event) => {
                    event.preventDefault();
                    history.push('/qr')
                }}>
                <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
        </IonFab>
    );
}