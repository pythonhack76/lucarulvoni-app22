import { IonContent, IonCardHeader, IonButton, IonItem, IonImg,IonCardContent, IonCardSubtitle, IonIcon, IonCardTitle, IonHeader, IonCard, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star } from 'ionicons/icons';
import image1 from './assets/imgs/imgs/background01.png';
import image2 from './assets/imgs/imgs/graph-plans.jpg'
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About me - Luca Rulvoni / <b> Digital Entrepreneur since 2000 </b> / Full Stack Developer </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About me</IonTitle>
           <ion-tabs>
            <IonTabBar slot="bottom"><p>full stack developer</p></IonTabBar>
            </ion-tabs>
          </IonToolbar>
          <IonImg src={image1}></IonImg>
        </IonHeader>
        <IonCard>
        
        <IonImg src={image2}></IonImg>
  <IonCardHeader>
    <IonCardSubtitle>Web & Software dal 2000</IonCardSubtitle>
    <IonCardTitle><b>Luca RULVONI </b>Digital Entrepreneur</IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    <p>
      A Torino dal 2000 realizziamo soluzioni web e software per imprese e professionisti in tutta Italia. Realizza oggi un nuovo sito web o rinnova quello attuale con una soluzione web professionale e disegnata sulle reali esigenze del Tuo Brand.
    </p>
    <IonItem>
      <IonButton fill="solid">Richiedi Ora!</IonButton>
      {/* <IonIcon icon={heart} slot="end"></IonIcon> */}
      {/* <IonIcon icon={share} slot="end"></IonIcon> */}
    </IonItem>
  </IonCardContent>
        </IonCard>

  <IonCard>
  <IonCard>
  <IonImg src={image1}></IonImg>
  <IonCardHeader>
    <IonCardSubtitle>Siti web Responsive</IonCardSubtitle>
    <IonCardTitle>Siti web Wordpress e Woocommerce</IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    <p>
      
      Realizza o rinnova il tuo sito web creando un sito web e-commerce. Creazione siti web responsive ecommerce a partire da Euro 2.990,00 (iva esclusa). Potrai acquistare le nostre soluzioni in 12 rate mensili senza interessi. Le nostre soluzioni includono Hosting sharing professionale. Canone aggiornamenti 12 mesi per le soluzioni "Sito made in Wordpress" Euro 390,00 (iva esclusa)
    </p>
    <IonItem>
      <IonButton fill="solid" size="default" color="warning" >Chiama il 3403143681</IonButton>
      <IonIcon slot="start" icon={star} />
      {/* <IonIcon icon={heart} slot="end"></IonIcon> */}
      {/* <IonIcon icon={share} slot="end"></IonIcon> */}
    </IonItem>
  </IonCardContent>
</IonCard>
    
  </IonCard>

  
        
      </IonContent>
      {/* <ExploreContainer name="" /> */}
    </IonPage>

  );
};

export default Tab1;
