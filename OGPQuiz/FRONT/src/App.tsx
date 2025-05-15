import './sass/styles/index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage';

function App() {

  return (
    <main className='main-container'>
      <Header/>
    <section className="content-container">
      <Homepage/>
    </section>
      <Footer/>      
    </main>
  )
   
}

export default App
