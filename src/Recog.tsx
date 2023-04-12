import { IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { TabBar } from './pages/Routes';
import * as vision from '@google-cloud/vision';
import { useSelector } from 'react-redux';

export const Recog: React.FC = () => {
    const recognizePlant = async (imageFile: any) => {
        // Create a new Vision client
        const client = new vision.ImageAnnotatorClient();

        // Read the image file and convert it to base64
        const content = await imageFile.readAsStringAsync();
        const base64 = content.replace(/^data:image\/\w+;base64,/, '');

        // Send the base64 encoded image to the Cloud Vision API
        const [result] = await client.labelDetection({
            image: { content: base64 },
        });

        // Extract the labels from the response
        const labels = result.labelAnnotations!.map(label => label.description);

        // Filter the labels to only include plant-related labels
        const plantLabels = labels.filter(label => {
            return label!.includes('plant') || label!.includes('flora');
        });

        // Return the first plant-related label, or null if none were found
        return plantLabels[0] || null;
    }
    let recognizedPlant = useSelector((state: any) => state.AppReducer.user.username)

    let onFileChange = async (event: any) => {
        const file = event.target.files[0];

        // Call the recognizePlant function and set the recognizedPlant property
        return recognizedPlant = await recognizePlant(file);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Plant Recognition</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <input type='file' onChange={onFileChange}></input>
                <IonCard>
                    <IonCardContent>
                        {recognizedPlant}
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <TabBar />
        </IonPage>
    );
};

