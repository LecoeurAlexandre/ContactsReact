import { Component } from 'react';
import { Contact } from './Contact';

export class List extends Component{
    constructor(props){
        super(props)
        this.state = {
        contacts : [{
        nom: "Polnareff", 
        prenom: "Michel", 
        telephone: "0123456789", 
        statut : true,
        adresse : {
            rue : "Rue du Bal des Laze",
            ville : "Nérac",
            cp : "47600"
            }
        },
        { 
        nom: "Berger", 
        prenom: "Michel", 
        telephone: "0123456789", 
        statut : false,
        adresse : {
            rue : "Rue du Paradis Blanc",
            ville : "Paris",
            cp : "75000"
            }
        },
        { 
        nom: "Sardou", 
        prenom: "Michel", 
        telephone: "0123456789", 
        statut : true,
        adresse : {
            rue : "Rue du Connemara",
            ville : "Dublin",
            cp : "D08"
            }
        }]
        }
    }

    render() {
        return(
            <div>
                <h1>Liste des chanteurs :</h1>
                {this.state.contacts.map((c, i) => (<Contact key={i} contact={c}></Contact>))}
            </div>
        )
    }
}