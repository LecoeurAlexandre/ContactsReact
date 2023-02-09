import {Adresse} from './Adresse';

export function Contact(props) {
    const {nom, prenom, telephone, statut} = props.contact;
    return (
        <>
        <h2>{nom} {prenom} {telephone}</h2>
        <Adresse adresse={props.contact.adresse}></Adresse>
        </>
    )  
}