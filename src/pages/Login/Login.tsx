import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../firebaseConfig';
import './Login.css';

export const Login: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [present] = useIonToast();
    const toast = (message: string) => {
        present({
            message: message,
            duration: 2500,
            position: 'bottom'
        });
    };

    async function login() {
        if (username === '' || password === '') {
            return toast("Username and Password required")
        }
        setBusy(true)
        const res: any = await loginUser(username, password)
        if (!res) {
            toast("Error! Check your credentials")
        }
        else {
            dispatch({
                type: "USER_STATE",
                payload: res.user.email
            })
            history.replace('/tab1')
            toast("Successfully logged in!")
        }
        setBusy(false)
    }
    return (
        <IonPage>
            <IonContent>
            <img className='login-img' src='https://media.giphy.com/media/l41lMTlCUccbXYqxG/giphy.gif' alt='hi!'/>
            <IonContent className='login ion-padding' >
                <IonCol className='login-form'>
                    <IonLoading message="Please wait..." duration={0} isOpen={busy} />
                    <IonInput className='login-input' placeholder='Username'
                        onIonChange={(e: any) => setUsername(e.target.value)} />
                    <IonInput className='login-input' placeholder='Password' type='password'
                        onIonChange={(e: any) => setPassword(e.target.value)} />
                    <IonButton className='login-btn' onClick={login}>Login</IonButton>
                    <p className='login-txt'>New User? <Link to="/register">Register now</Link></p>
                    <p className='login-txt'>Forgot password? <Link to="">Click here</Link></p>
                </IonCol>
            </IonContent>
            </IonContent>
        </IonPage>
    );
};


