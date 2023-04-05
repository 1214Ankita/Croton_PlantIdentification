import { IonAvatar, IonCol, IonIcon, IonRow, IonSearchbar, IonText } from '@ionic/react';

import { useSelector } from 'react-redux';

import './HomeTop.css';
import { settings, notifications } from 'ionicons/icons';

export const HomeTop: React.FC = () => {
    const username = useSelector((state: any) => state.AppReducer.user.username);


    return (
        <IonCol className='HomeTop-main'>
            <IonRow className='HomeTop-bg'></IonRow>
            <IonRow className='HomeTop-header'>
                <IonText>CROTON</IonText>
                <div>
                <IonIcon icon={settings} />
                <IonIcon icon={notifications} />
                </div>
            </IonRow>
            <IonSearchbar className='HomeTop-search' debounce={500} cancelButtonText="Cancel"></IonSearchbar>
            <IonRow className='HomeTop-user'>
                <IonCol className='HomeTop-username'>
                    <p className='welcome'>Welcome,</p>
                    {(username !== null)?<p className='username'>{username}</p>:<p className='username'>User</p>}
                </IonCol>
                <IonRow className='HomeTop-usericon'><IonAvatar><img src='https://picsum.photos/200' alt="profile avatar"/></IonAvatar></IonRow>
            </IonRow>
        </IonCol>
    );
}
