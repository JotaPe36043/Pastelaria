import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './routes/Home.jsx';
import { Menu } from './routes/Menu.jsx';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu />}/>
      </Routes>
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
