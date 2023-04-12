import { IonButton, IonContent, IonHeader, IonLoading, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonIcon, IonRow, IonCol } from '@ionic/react';
import { arrowBack, eye, help, headset, language, shield, book } from "ionicons/icons";
import { people } from "ionicons/icons";
import './Settings.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { logoutuser } from '../../firebaseConfig';

export const Settings: React.FC = () => {
    const history = useHistory();
    const [busy, setBusy] = useState(false)
  
    async function logout() {
      setBusy(true)
      await logoutuser()
      setBusy(false)
      history.replace('/')
    }
    return (
        <IonPage>
            <IonContent class="ion-padding">
                <div className='set_main'>
                    <div className='set_submain'>
                        <IonIcon class="set_back_arrow" icon={arrowBack}
                            onClick={(event) => {
                                event.preventDefault();
                                history.push('/tab1')
                            }}
                        ></IonIcon>
                        <p className='set_header'>Settings</p>
                    </div>

                    <IonCol className="set_cat">
                        <IonRow className="icon_cat" onClick={(event) => {
                                    event.preventDefault();
                                    history.push('/profile')
                                }}>
                            <IonIcon class="set_icon" icon={people}></IonIcon>
                            <p className='icon_title'>Profile</p>
                        </IonRow>
                        <IonRow className="icon_cat" onClick={(event) => {
                                event.preventDefault();
                                history.push('/priv')
                            }}>
                            <IonIcon class="set_icon" icon={shield} ></IonIcon>
                            <p className='icon_title'>Privacy and Security</p>
                        </IonRow>
                        <IonRow className="icon_cat" onClick={(event) => {
                                event.preventDefault();
                                history.push('/help')
                            }}>
                            <IonIcon class="set_icon" icon={headset}></IonIcon>
                            <p className='icon_title'>Help & Support</p>
                        </IonRow>
                        <IonRow className="icon_cat" onClick={(event) => {
                                event.preventDefault();
                                history.push('/about')
                            }}>
                            <IonIcon class="set_icon" icon={help}></IonIcon>
                            <p className='icon_title'>About</p>
                        </IonRow>
                        <IonRow className="icon_cat" onClick={(event) => {
                                event.preventDefault();
                                history.push('/feedback')
                            }}>
                            <IonIcon class="set_icon" icon={book}></IonIcon>
                            <p className='icon_title'>Feedback</p>
                        </IonRow>
                        <IonLoading message="Logging out..." duration={0} isOpen={busy} />
                        <IonRow/>
                        <IonButton onClick={logout}>Logout</IonButton>
                    </IonCol>
                    <img className='set_plant' src="https://walderlab.org/wp-content/uploads/2014/02/plant30-grn-brn.png"></img>
                </div>
            </IonContent>
        </IonPage>
    );
};

