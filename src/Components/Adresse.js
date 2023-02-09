export function Adresse(props) {
    const {rue, ville, cp} = props.adresse
    return (<p>{rue} {ville} {cp}</p>)  
}