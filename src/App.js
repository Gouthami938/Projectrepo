import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import UserDetails from './pages/UserDetails'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDto from './pages/UserDto';
import UserTable from './pages/UserTable';
import Acceptlist from './pages/Acceptlist';
import Userdata from './pages/Userdata';
import Payment from './pages/Payment';
import SubmittedForm from './pages/SubmittedForm';
import Platinum from './pages/Platinum';
import Gold from './pages/Gold';
import Silver from './pages/Silver';
import PaymentSilver from './pages/PaymentSilver';
import Silverlist from './pages/Silverlist';
import Goldlist from './pages/Goldlist';
import ContactUs from './pages/ContactUs';

function App() {
  return (
   <BrowserRouter>
   <ToastContainer/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/userdetails" element={<UserDetails/>}/>
    <Route path="/UserDto" element={<UserDto/>}/>
    <Route path="/UserTable"element={<UserTable/>}/>
    <Route path="/Acceptlist" element={<Acceptlist/>}/>
    <Route path="/Userdata" element={<Userdata/>}/>
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/SubmittedForm" element={<SubmittedForm/>}/>
    <Route path="/Platinum" element={<Platinum/>}/>
    <Route path="/Gold" element={<Gold/>}/>
    <Route path="/Silver" element={<Silver/>}/>
    <Route path="/PaymentSilver" element={<PaymentSilver/>}/>
    <Route path="/Silverlist" element={<Silverlist/>}/>
    <Route path="/Goldlist" element={<Goldlist/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
   </Routes>

   </BrowserRouter>

  );
}
export default App;
