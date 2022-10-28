import './App.css';
import {useEffect} from "react"
import { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './components/Home';
import AdminRegister from './components/Admin/AdminRegister/AdminRegister';
import AddProject from './components/Admin/AddProject/AddProject';
import AdminPage from './components/Admin/AdminPage/AdminPage';
import { Navigate } from 'react-router-dom';
import Message from './components/Admin/Message/Message';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
function App() {
const token=sessionStorage.getItem("token");

useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);
  return (
    <div className="App">
    
     <Toaster 
   position='top-center'
   toastOptions={{
    success:{
      theme:{
        primary:"#4ae088"
      }
    }
   }}></Toaster>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addProject' element={token?<AddProject/>:<Navigate to="/adminlogin"/>}/>
        <Route path='/adminlogin' element={token?<Navigate to="/admin"/>:<AdminRegister/>}/>
        <Route path="/admin" element={token?<AdminPage/>:<Navigate to="/adminlogin"/>}/>
        <Route path="/message" element={token?<Message/>:<Navigate to="/adminlogin"/>}/>
      </Routes>
    </Router> 
     </div>
  );
}


export default App;
