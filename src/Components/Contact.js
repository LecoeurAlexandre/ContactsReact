import {Adresse} from './Adresse';

export function Contact(props) {
    const {nom, prenom, telephone, statut, adresse} = props.contact;
    
    changeStatus = () => {
        console.log("ça marche ?")
    }
    return (
        <div className="contact-container">
        <h2>{nom.toUpperCase()} {prenom} {telephone}</h2>
        <Adresse adresse={adresse}></Adresse>
        <span className = {statut ? 'green' : 'red'}>Statut : {statut ? 'Actif' : 'Inactif'}</span>
        <button type= 'button' onClick={changeStatus}>Changer le statut</button>
        </div>
    )  
}

