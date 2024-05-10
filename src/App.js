
import './App.css';
import { Route, Routes } from 'react-router';
import Lets_Go from './Pages/Lets_Go';
import Company_Details from './Pages/Company_Details';
import Login from './Pages/Login';
import OTP from './Pages/OTP';
import Home from './Pages/Home';
import Letsconnect from'./Pages/Lets_connect/Letsconnect';
import Secure from './Pages/SecurityPage/secure';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' index element={<Lets_Go/>}></Route>
        <Route path='Details' element={<Company_Details></Company_Details>}></Route>
        <Route path='Login' element={<Login></Login>}></Route>
        <Route path='OTP' element={<OTP></OTP>}></Route>
        <Route path='FullDetails' element={<Home></Home>}></Route>
        <Route path='Letsconnect' element={<Letsconnect></Letsconnect>}></Route>
        <Route path='Secure' element={<Secure></Secure>}></Route>
      </Routes>
    </div>
  );
}

export default App;
