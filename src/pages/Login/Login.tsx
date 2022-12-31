import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
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
        if(username === '' || password === ''){
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
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen class='login ion-padding' >
                <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
                <IonInput placeholder='Username'
                    onIonChange={(e: any) => setUsername(e.target.value)} />
                <IonInput placeholder='Password' type='password'
                    onIonChange={(e: any) => setPassword(e.target.value)} />
                <IonButton onClick={login}>Login</IonButton>
                <p>New User? <Link to="/register">Register now</Link></p>
            </IonContent>
        </IonPage>
    );
};


