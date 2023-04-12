import { IonAvatar, IonCol, IonIcon, IonRow, IonSearchbar, IonText } from '@ionic/react';

import { useSelector } from 'react-redux';

import './HomeTop.css';
import { settings } from 'ionicons/icons';
import { useHistory } from "react-router";


export const HomeTop: React.FC = () => {
    const username = useSelector((state: any) => state.AppReducer.user.username);
    const history = useHistory();

    return (
        <IonCol className='HomeTop-main md hydrated'>
            <IonRow className='HomeTop-bg'></IonRow>
            <IonRow className='HomeTop-header'>
                <IonText>CROTON</IonText>
                <div>
                    <IonIcon icon={settings} onClick={(event) => {
                        event.preventDefault();
                        history.push('/settings')
                    }}
                    />
                </div>
            </IonRow>
            <div className='HomeTop-search'></div>
            <IonRow className='HomeTop-user'>
                <IonCol className='HomeTop-username'>
                    <p className='welcome'>Welcome,</p>
                    {(username !== null) ? <p className='username'>{username}</p> : <p className='username'>User</p>}
                </IonCol>
                <IonRow className='HomeTop-usericon'><IonAvatar><img src='https://thumbs.dreamstime.com/b/cute-happy-smiling-plant-vector-flat-cartoon-illustration-icon-design-isolated-white-background-plant-pot-houseplant-concept-157216265.jpg' alt="profile avatar" /></IonAvatar></IonRow>
            </IonRow>
        </IonCol>
    );
}
