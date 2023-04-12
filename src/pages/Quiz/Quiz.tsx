import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Quiz.css';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useHistory } from 'react-router';

export const PQuiz: React.FC = () => {
    const history = useHistory();

    const [rows, setRows] = useState<any | null>([]);
    const plantsInfo = collection(db, "Plants")
    useEffect(() => {
        getPlants();
    }, []);
    const getPlants = async () => {
        const data = await getDocs(plantsInfo);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // JSON.stringify(rows)


    }
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Learn more about me</IonTitle>
            </IonHeader>
            <IonContent>
                {rows.map((row: {
                    map: any;
                    Quiz: any;
                    question: any;
                    p_bot: ReactNode;
                    p_desc: ReactNode; id: Key | null | undefined; p_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                }) => {
                    return(
                        <>
                        <p key={row.id}>{row.p_name}</p>
                        <p key={row.id}></p>

                        </>
                    )
                    })}
            </IonContent>
        </IonPage>
    );
};