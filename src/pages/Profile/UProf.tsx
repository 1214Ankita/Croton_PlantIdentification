import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonPage, IonRow } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const UProf: React.FC = () => {
    const history = useHistory();
    const [rows, setRows] = useState<any | null>([]);
    const plantsInfo = collection(db, "Users")
    useEffect(() => {
        getPlants();
    }, []);
    const getPlants = async () => {
        const data = await getDocs(plantsInfo);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // JSON.stringify(rows)
        console.log(rows)
    }
    return (
        <IonPage>
            <IonRow className='HomeList-main'>
                <p>User Profile</p>
            </IonRow>
            <IonRow className='HomeList-list ion-align-items-baseline'>
                {rows.map((row: {
                    u_email: ReactNode;
                    u_mobile: ReactNode;
                    u_dob: ReactNode;
                    u_name: string | undefined;
                    p_img: string | undefined;
                    p_brief: ReactNode;
                    p_desc: ReactNode; id: Key | null | undefined; p_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                }) => {
                        return (<IonCard className='HomeList-card' >
                            <IonCardHeader className='HomeList-header'>
                                <IonCardTitle key={row.id}>{row.u_name}</IonCardTitle></IonCardHeader>
                            <IonCardContent className='HomeList-content'>{row.u_dob} </IonCardContent>
                            <IonCardContent className='HomeList-content'>{row.u_mobile} </IonCardContent>
                            <IonCardContent className='HomeList-content'>{row.u_email} </IonCardContent>
                        </IonCard>)

                })}
            </IonRow>

        </IonPage>
    );
}
export default UProf;