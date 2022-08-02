import { IonContent, IonCardHeader, IonButton, IonItem, IonImg,IonCardContent, IonCardSubtitle, IonIcon, IonCardTitle, IonHeader, IonCard, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Servizi web & Software Luca Rulvoni / <b> Digital Entreprenour </b> </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About me</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
        <IonImg src="https://www.lucarulvoni.it/archivio/marketing-plans.jpg"></IonImg>
  <IonCardHeader>
    <IonCardSubtitle>Web & Software dal 2000</IonCardSubtitle>
    <IonCardTitle><h2><b>Servizi Web</b></h2> </IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    <p>
      A Torino dal 2000 realizziamo soluzioni web e software per imprese e professionisti in tutta Italia. Realizza oggi un nuovo sito web o rinnova quello attuale con una soluzione web professionale e disegnata sulle reali esigenze del Tuo Brand.
      A Torino dal 2000 realizziamo soluzioni web e software per imprese e professionisti in tutta Italia. Realizza oggi un nuovo sito web o rinnova quello attuale con una soluzione web professionale e disegnata sulle reali esigenze del Tuo Brand.
    </p>
    <IonItem>
      <IonButton fill="solid">Chiama il 3403143681!</IonButton>
      {/* <IonIcon icon={heart} slot="end"></IonIcon> */}
      {/* <IonIcon icon={share} slot="end"></IonIcon> */}
    </IonItem>
  </IonCardContent>
        </IonCard>

  <IonCard>
  <IonCard>
  <IonImg src="https://www.lucarulvoni.it/archivio/woocommerce.png"></IonImg>
  <IonCardHeader>
    <IonCardSubtitle>Siti web Responsive</IonCardSubtitle>
    <IonCardTitle>Siti web Wordpress e Woocommerce</IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    <p>
      Realizza o rinnova il tuo sito web creando un sito web e-commerce. Creazione siti web responsive ecommerce a partire da Euro 2.990,00 (iva esclusa). Potrai acquistare le nostre soluzioni in 12 rate mensili senza interessi. Le nostre soluzioni includono Hosting sharing professionale. Canone aggiornamenti 12 mesi per le soluzioni "Sito made in Wordpress" Euro 390,00 (iva esclusa)
      Realizza o rinnova il tuo sito web creando un sito web e-commerce. Creazione siti web responsive ecommerce a partire da Euro 2.990,00 (iva esclusa). Potrai acquistare le nostre soluzioni in 12 rate mensili senza interessi. Le nostre soluzioni includono Hosting sharing professionale. Canone aggiornamenti 12 mesi per le soluzioni "Sito made in Wordpress" Euro 390,00 (iva esclusa)
    </p>
    <IonItem>
      <IonButton fill="solid">Richiedi un preventivo!</IonButton>
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

export default Tab2;
