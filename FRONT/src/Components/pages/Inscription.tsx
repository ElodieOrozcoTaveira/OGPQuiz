import { useState } from "react";

interface inscriptions {
  lastname: string;
  firstname: string;
  mail: string;
  password: string;
}

export default function Inscription() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleChange = (e) => {
    setLastname(e.target.value);
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // handleSubmit doit recevoir l'évènement et faire preventDefault pour éviter le rechargement de la page
    if (password === confPassword) {
      alert(`Nom d/'utilisateur : ${lastname}, Email ${mail}`);
    } else {
      alert(`Les mots de passe ne correspondent pas`);
    }
  };

  return (
    <div className="inscription-page">
      <article className="container-form">
        <h2 className="container-form__inscription">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Nom:
              <input
                type="text"
                value={lastname}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Prénom:
              <input
                type="text"
                value={firstname}
                onChange={handleFirstnameChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              E-mail:
              <input
                type="email"
                value={mail}
                onChange={handleMailChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Mot de Passe:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Confirmation mot de passe:
              <input
                type="password"
                value={confPassword}
                onChange={handleConfPasswordChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="form-group__btn-submit">
            S'inscrire
          </button>
        </form>
      </article>
    </div>
  );
}
