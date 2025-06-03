import { useState } from "react"


export default function Connexion() {




  return (
    <div className="connexion-page">
      <article className="connexion-form">
        <h2 className="connexion-form__connexion">Connexion</h2>
        <form>
          <div className="form-connexion">
            <label>
              Email
              <input type="email" required />
            </label>
          </div>
          <div className="form-connexion">
            <label>
              Mot de Passe
              <input type="password" required />
            </label>
          </div>
          <button className="form-connexion__btn-submit" type="submit">Se connecter</button>
        </form>
      </article>
    </div>
  );
}