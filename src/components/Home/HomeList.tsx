import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRow } from '@ionic/react';
import './HomeList.css';

export const HomeList: React.FC = () => {
    return (
        <>
            <IonRow className='HomeList-main'>
                <p>Quick Picks</p>
            </IonRow>
                <IonRow className='HomeList-list ion-align-items-baseline'>
                    <IonCard className='HomeList-card'>
                        <img className='HomeList-img' src='https://picsum.photos/161/78' alt="plants"/>
                        <IonCardHeader className='HomeList-header'>
                            <IonCardTitle>Croton</IonCardTitle></IonCardHeader>
                        <IonCardContent className='HomeList-content'>Lorem ipsum dolor sit amet, consectetur.</IonCardContent>
                    </IonCard>  
                    <IonCard className='HomeList-card'>
                        <img className='HomeList-img' src='https://picsum.photos/161/78' alt="plants"/>
                        <IonCardHeader className='HomeList-header'>
                            <IonCardTitle>Croton</IonCardTitle></IonCardHeader>
                        <IonCardContent className='HomeList-content'>Lorem ipsum dolor sit amet.</IonCardContent>
                    </IonCard>  
                    <IonCard className='HomeList-card'>
                        <img className='HomeList-img' src='https://picsum.photos/161/78' alt="plants"/>
                        <IonCardHeader className='HomeList-header'>
                            <IonCardTitle>Croton</IonCardTitle></IonCardHeader>
                        <IonCardContent className='HomeList-content'>Lorem ipsum hi.</IonCardContent>
                    </IonCard>  
                    <IonCard className='HomeList-card'>
                        <img className='HomeList-img' src='https://picsum.photos/161/78' alt="plants"/>
                        <IonCardHeader className='HomeList-header'>
                            <IonCardTitle>Croton</IonCardTitle></IonCardHeader>
                        <IonCardContent className='HomeList-content'>Lorem ipsum dolor sit amet, consectetur fegdhysbwd sgha.</IonCardContent>
                    </IonCard>  
                </IonRow>
        </>
    );
}
