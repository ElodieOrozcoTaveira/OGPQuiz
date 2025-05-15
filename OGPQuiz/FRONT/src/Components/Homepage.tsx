

interface QuizCategory {

        title: string;
        description: string;
        id: number;
        route?: string; // optionnel si non utilité d'ou le ? 
        image: string;
}      

export default function Content(){

        const quizCategories: QuizCategory[] = [
            {id:1, title: 'Pilotes', description:'Choisis ton quiz pilote', image: '/integration/images/Pilotes/martin.webp'},
            {id:2, title: 'Teams', description:'Choisis ton quiz team',image: '/integration/images/Teams/101.webp'},
            {id:3, title: 'Circuits', description:'Choisis ton quiz circuit', image: '/integration/images/Circuits/jerez.jpg'}

        ]

    return (
        <div className="content-container">
            <section className="section-container">
                <h2 className="section-container__welcome">Bienvenue sur cette page dédiée à l'univers MotoGP 2025.</h2>
                <p className="section-container__paragraph">Passioné de vitesse, de compétition et des deux roues les plus puissantes de la planète?</p>
                <p className="section-container__sub-paragraph">Viens mettre à l'épreuve tes connaissances à travers nos quizs conçus pour les mordus de la discipline</p>
            </section>

           
                <section className="container-quizCategories">

                    {quizCategories.map((category) => (
                        <article className="container-article" key={category.id}>
                            <p className="container-article__p">{category.title}</p>
                            <div className="container-article__image">
                                {category.image && <img src={category.image} alt={category.title} />}
                            </div>
                            <div className="container-article__button">
                                <li><a href="/index.html" className="container-article__link">Commencez le quiz 🏍️</a></li>
                                
                            </div>
                        </article>
                    ))}
                </section>
        </div>
    );
}