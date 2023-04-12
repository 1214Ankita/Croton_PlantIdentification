import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRow } from '@ionic/react';
import './HomeList.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

export const HomeList: React.FC = () => {
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
        console.log(rows)
    }
    return (
        <>
            <IonRow className='HomeList-main'>
                <p>Quick Picks</p>
            </IonRow>
            <IonRow className='HomeList-list ion-align-items-baseline'>
                {rows.map((row: {
                    p_img: string | undefined;
                    p_brief: ReactNode;
                    p_desc: ReactNode; id: Key | null | undefined; p_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                }) => {
                        return (<IonCard className='HomeList-card' onClick={(event) => {
                            event.preventDefault();
                            history.push(`/details/${row.id}`)
                        }}>
                            <img className='HomeList-img' src={row.p_img} alt="plants" />
                            <IonCardHeader className='HomeList-header'>
                                <IonCardTitle key={row.id}>{row.p_name}</IonCardTitle></IonCardHeader>
                            <IonCardContent className='HomeList-content'>{row.p_brief} </IonCardContent>
                        </IonCard>)

                })}
            </IonRow>

        </>
    );
}
