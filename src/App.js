import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from "./components/Home";
import ThemeList from './components/ThemeList';

function App() {
  localStorage.setItem("customThemes", JSON.stringify([]));
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/theme-list' element={<ThemeList />} />
      </Routes>
    </>
  );
}

export default App;