import { Link } from 'react-router-dom';

  export default function ErrorPage() {
    return(
        <div className='error-page'>
            <img className='error-page__img' src="/integration/images/logos/404.svg" alt="image404error" />
            <h1 className='error-page__text'>Oups..t'es sorti de la piste</h1>
            <Link className='error-page__link' to='/'>Retourne au Paddock</Link>
        </div>
    )
}