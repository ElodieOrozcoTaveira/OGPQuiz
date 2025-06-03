import './sass/styles/index.css'
import Homepage from './Components/pages/Homepage';
import { createBrowserRouter, RouterProvider } from'react-router-dom';
import Layout from './Components/Layout';
import Inscription from './Components/pages/Inscription';
import Connexion from './Components/pages/Connexion';
import ErrorPage from './Components/pages/ErrorPage';
import Pilotes from './Components/pages/Pilotes';

function App() {

const router = createBrowserRouter([
  {
    path : '/', //correspond à la racine du site
    element: <Layout/>,

    children: [
      { path : '/', element:<Homepage/>},
      { path : '/inscription', element:<Inscription/>},
      { path : '/connexion', element:<Connexion/>},
      { path : '/page-pilote', element:<Pilotes/> },
      { path : '/*', element:<ErrorPage/>},



    ]
  }
])

  return (
<RouterProvider router={router}/>

  );
   
}

export default App
