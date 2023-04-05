import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registerUser } from '../../firebaseConfig';
import './Register.css';

export const Register: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const [present] = useIonToast();
    const toast = (message: string) => {
        present({
            message: message,
            duration: 2500,
            position: 'bottom'
        });
    };

    async function register() {
        if (password !== cpassword) {
            return toast("Passwords do not match")
        }
        if (username === '' || password === '') {
            return toast("Username and Password required")
        }
        setBusy(true)
        const res = await registerUser(username, password)
        if (!res) {
            toast("Error! Check your credentials")
        }
        else {
            toast("Successfully registered!")
            history.replace('/login')
        }
        setBusy(false)
    }
    return (
        <IonPage>
            <IonContent>
                <img className='reg-img' src='https://media.giphy.com/media/l41lMTlCUccbXYqxG/giphy.gif' alt='hi!' />
                <IonContent className='register ion-padding'>
                    <IonCol className='reg-form'>
                        <IonLoading message="Please wait..." duration={0} isOpen={busy} />
                        <IonInput className='reg-input' placeholder='Username' onIonChange={(e: any) => setUsername(e.target.value)} />
                        <IonInput className='reg-input' placeholder='Password (atleast 6 chars)' type='password' onIonChange={(e: any) => setPassword(e.target.value)} />
                        <IonInput className='reg-input' placeholder='Confirm password' type='password' onIonChange={(e: any) => setCpassword(e.target.value)} />
                        <IonButton className='reg-btn' onClick={register}>Login</IonButton>
                        <p className='reg-txt'>Already have an account? <Link to="/login">Login</Link></p>
                    </IonCol>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};


