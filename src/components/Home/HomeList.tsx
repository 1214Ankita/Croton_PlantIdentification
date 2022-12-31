import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRow } from '@ionic/react';
import './HomeList.css';

export const HomeList: React.FC = () => {
    return (
        <>
            <IonRow class='HomeList-main'>
                <p>Quick Picks</p>
            </IonRow>
                <IonRow class='HomeList-list ion-align-items-baseline'>
                    <IonCard class='HomeList-card'>
                        <img className='HomeList-img' src='https://picsum.photos/161/78' alt="plants"/>
                        <IonCardHeader class='HomeList-header'>
                            <IonCardTitle>Croton</IonCardTitle></IonCardHeader>
                        <IonCardContent class='HomeList-content'>Lorem ipsum dolor sit amet, consectetur.</IonCardContent>
                    </IonCard>  
                    <IonCard class='HomeList-card'>
                        <img className='HomeList-img' src='https://picsum.photos/161/78' alt="plants"/>
                        <IonCardHeader class='HomeList-header'>
                            <IonCardTitle>Croton</IonCardTitle></IonCardHeader>
                        <IonCardContent class='HomeList-content'>Lorem ipsum dolor sit amet.</IonCardContent>
                    </IonCard>  
                    <IonCard class='HomeList-card'>
                        <img className='HomeList-img' src='https://picsum.photos/161/78' alt="plants"/>
                        <IonCardHeader class='HomeList-header'>
                            <IonCardTitle>Croton</IonCardTitle></IonCardHeader>
                        <IonCardContent class='HomeList-content'>Lorem ipsum.</IonCardContent>
                    </IonCard>  
                    <IonCard class='HomeList-card'>
                        <img className='HomeList-img' src='https://picsum.photos/161/78' alt="plants"/>
                        <IonCardHeader class='HomeList-header'>
                            <IonCardTitle>Croton</IonCardTitle></IonCardHeader>
                        <IonCardContent class='HomeList-content'>Lorem ipsum dolor sit amet, consectetur fegdhysbwd sgha.</IonCardContent>
                    </IonCard>  
                </IonRow>
        </>
    );
}
