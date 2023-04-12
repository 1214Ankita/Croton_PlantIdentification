import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRow } from '@ionic/react';
import './ExploreList.css';
import { useHistory } from 'react-router';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
// import { useFirebaseDatabase } from "react-firebase-hooks/database";
export const ExploreList: React.FC = () => {
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
            <div className='ExploreList-main'>
                <IonRow class='ion-padding ExploreList-head'>
                    <p>Summer</p>
                </IonRow>

                <IonRow className='HomeList-list ion-align-items-baseline'>
                    {rows.map((row: {
                        p_img: string | undefined;
                        p_brief: ReactNode;
                        p_desc: ReactNode; id: Key | null | undefined; p_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                    }) => {
                        if (row.id == 101)
                            return (<IonCard className='HomeList-card' onClick={(event) => {
                                event.preventDefault();
                                history.push(`/details/${row.id}`)
                            }}>
                                <img className='HomeList-img' src={row.p_img} alt="plants" />
                                <IonCardHeader className='HomeList-header'>
                                    <IonCardTitle key={row.id}>{row.p_name}</IonCardTitle></IonCardHeader>
                            </IonCard>)
                        else if (row.id == 102)
                            return (<IonCard className='HomeList-card' onClick={(event) => {
                                event.preventDefault();
                                history.push(`/details/${row.id}`)
                            }}>
                                <img className='HomeList-img' src={row.p_img} alt="plants" />
                                <IonCardHeader className='HomeList-header'>
                                    <IonCardTitle key={row.id}>{row.p_name}</IonCardTitle></IonCardHeader>
                            </IonCard>)
                        else return null

                    })}

                </IonRow>
            </div>
            <div className='ExploreList-main'>

                <IonRow class='ion-padding ExploreList-head'>
                    <p>Water Creators</p>
                </IonRow>

                <IonRow className='HomeList-list ion-align-items-baseline'>
                    {rows.map((row: {
                        p_img: string | undefined;
                        p_brief: ReactNode;
                        p_desc: ReactNode; id: Key | null | undefined; p_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                    }) => {
                        if (row.id == 103)
                            return (<IonCard className='HomeList-card' onClick={(event) => {
                                event.preventDefault();
                                history.push(`/details/${row.id}`)
                            }}>
                                <img className='HomeList-img' src={row.p_img} alt="plants" />
                                <IonCardHeader className='HomeList-header'>
                                    <IonCardTitle key={row.id}>{row.p_name}</IonCardTitle></IonCardHeader>
                            </IonCard>)
                        else if (row.id == 104)
                            return (<IonCard className='HomeList-card' onClick={(event) => {
                                event.preventDefault();
                                history.push(`/details/${row.id}`)
                            }}>
                                <img className='HomeList-img' src={row.p_img} alt="plants" />
                                <IonCardHeader className='HomeList-header'>
                                    <IonCardTitle key={row.id}>{row.p_name}</IonCardTitle></IonCardHeader>
                            </IonCard>)
                        else return null

                    })}

                </IonRow>
            </div>
            <div className='ExploreList-main'>

                <IonRow class='ion-padding ExploreList-head'>
                    <p>Medicinal Plants</p>
                </IonRow>

                <IonRow className='HomeList-list ion-align-items-baseline'>
                    {rows.map((row: {
                        p_img: string | undefined;
                        p_brief: ReactNode;
                        p_desc: ReactNode; id: Key | null | undefined; p_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                    }) => {
                        if (row.id == 103)
                            return (<IonCard className='HomeList-card' onClick={(event) => {
                                event.preventDefault();
                                history.push(`/details/${row.id}`)
                            }}>
                                <img className='HomeList-img' src={row.p_img} alt="plants" />
                                <IonCardHeader className='HomeList-header'>
                                    <IonCardTitle key={row.id}>{row.p_name}</IonCardTitle></IonCardHeader>
                            </IonCard>)
                        else if (row.id == 104)
                            return (<IonCard className='HomeList-card' onClick={(event) => {
                                event.preventDefault();
                                history.push(`/details/${row.id}`)
                            }}>
                                <img className='HomeList-img' src={row.p_img} alt="plants" />
                                <IonCardHeader className='HomeList-header'>
                                    <IonCardTitle key={row.id}>{row.p_name}</IonCardTitle></IonCardHeader>
                            </IonCard>)
                        else return null

                    })}

                </IonRow>
            </div>



        </>
    );
}