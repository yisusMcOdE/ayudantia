import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';

const routes = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:id' element={<MovieDetails/>}/>
  </>

))


function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
