import { IonAvatar, IonCol, IonIcon, IonRow, IonSearchbar, IonText } from '@ionic/react';
import "./ExploreTop.css";
import { useSelector } from 'react-redux';
import { settings, notifications } from 'ionicons/icons';
import { ExploreList } from './ExploreList';
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';


export const ExploreTop: React.FC = () => {
  //   const username = useSelector((state: any) => state.AppReducer.user.username);
  //   const [results, setResults] = useState([]);

  // const handleSearch = async (event:any) => {
  //   const query = event.target.value;
  //   const ref = firebase.database().ref('data');
  //   const snapshot = await ref.orderByChild('name').equalTo(query).once('value');
  //   const data = snapshot.val();
  //   const filteredResults = data ? Object.values(data) : [];
  //   setResults(filteredResults);
  // };

    return (
        <IonCol class='Explore-main'>
            <IonRow className='Explore-bg'></IonRow>
            <IonRow class='Explore-header'>
                <IonText className='explore_head'>CROTON</IonText>
                <div>
                </div>
            </IonRow>
            {/* <ExploreList/> */}
            
        
        </IonCol>
    );
}
