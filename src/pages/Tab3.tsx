import { IonContent, IonHeader, IonPage, IonTitle, IonText, IonToolbar, IonLabel, IonInput, IonRadio, IonCardHeader, IonButton, IonItem, IonImg,IonCardContent, IonCardSubtitle, IonIcon, IonCardTitle,  IonCard, IonCheckbox } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Controller, useForm } from 'react-hook-form';
import Input, { InputProps } from '../components/Input';
import './Tab3.css';

const Tab3: React.FC = () => {

  const { control, handleSubmit } = useForm();

  const formFields: InputProps[] = [
    {
      name: "email",
      component: <IonInput type="email" />,
      label: "Email",
    },
    {
      name: "fullName",
      label: "Full Name",
    },
    {
      name: "password",
      component: <IonInput type="password" clearOnEdit={false} />,
      label: "Password",
    },
  ];

  const registerUser = () => {
    console.log('hai aggiunto utente');
  }
  
  
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contatti</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contatti</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div id="fisso" slot="absolute">
  <h2>
    <b>Contattaci per info e preventivi ! </b>
    </h2>  
</div>
        {/* <ExploreContainer name="Tab 3 page" /> */}
    <IonText color="muted">
      <h2>Richiesta Info</h2>
    </IonText>
        <form onSubmit={handleSubmit(registerUser)}>
            {formFields.map((field, index) => (
              <Input {...field} control={control} key={index} />
            ))}
            <IonItem>
              <IonLabel>I agree to the terms of service</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
              Register
            </IonButton>
          </form>
          <div className="contatti"><p>
        <h2><b>Restiamo sempre in contatto!</b></h2>
Pronti a partire con un nuovo progetto web o software insieme a noi ? 
Chiamaci o inviaci una email per avere informazioni sui costi e le tempistiche di attivazione dei 
servizi web e software.</p></div>
      </IonContent>      
 
    </IonPage>
  );
};

export default Tab3;
