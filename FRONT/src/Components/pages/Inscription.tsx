import { useState } from "react"

interface inscriptions  {
    lastname: string;
    firstname: string;
    mail: string;
    password: string;
}



export default function Inscription() {

    const [lastname, setLastname] = useState('');
    const [fisrtname, setFirstname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
   
const handleChange = (e) =>{
    setLastname(e.target.value)
}

const handleFirstnameChange = (e) => {
    setFirstname(e.target.value)
}

const handleMailChange = (e) =>{
    setMail(e.target.value)
}

const handlePasswordChange = (e) => {
    setPassword(e.target.value)
}

const handleConfPasswordChange = (e) =>{
    setConfPassword(e.target.value)
}

const handleSubmit = () => {
    if(password === confPassword){
        alert(`Nom d/'utilisateur : ${lastname}, Email ${mail}` )
    } else {
        alert(`Les mots de passe ne correspondent pas`)
    }
}

    return(


    <article className="container-form">
       <form onSubmit={handleSubmit} >
            <label>
                Nom:
                <input type="text" value={lastname} onChange={handleChange} required />
            </label>
            <label>
                Prénom:
                <input type="text" value={fisrtname} onChange={handleFirstnameChange} required />
            </label>
            <label>
                E-mail: 
                <input type="email" value={mail} onChange={handleMailChange} required />
            </label>
            <label>
                Mot de Passe: 
                <input type="password" value={password} onChange={handlePasswordChange} required />
            </label>
            <label>
                Confirmation mot de passe:
                <input type="password" value={confPassword} onChange={handleConfPasswordChange} required />
            </label>
            <button>S'inscrire</button>
       </form>
        </article>     

    );
}