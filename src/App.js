import Banner from './components/Banner';
import Movies from './components/Movies';
import WatchList from './components/WatchList';
import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
     <Routes>
      <Route path='/' 
      element={<>
      <Banner/>
     <Movies/>
     <WatchList/>
      </>}/>
      <Route path='/watchlist' element={
        <WatchList/>
      }/>
     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
