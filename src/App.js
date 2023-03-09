import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from "./components/Home";
import ThemeList from './components/ThemeList';
import Footer from './components/Footer';

function App() {

  const location = useLocation();

  return (
    <>
      <ToastContainer />
      <Header />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />} />
          <Route path='/theme-list' element={<ThemeList />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;