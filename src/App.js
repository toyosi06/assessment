import logo from './logo.svg';
import Login from './components/login'
import About from './components/about'
import Forgotpassword from './components/forgotpassword'
import Contactus from './components/contactus'; 
import Signup from './components/signup';
import { Routes, Route} from "react-router-dom"
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';
import './App.css'

const app = initializeApp(firebaseConfig);

function App () {
  return ( 
    (<div>
      <Routes> 
       < Route path= "/" element= {<Login />}/>
       < Route path= "/about" element= {<About/>}/>
       < Route path= "/contactus" element= {<Contactus/>}/>
       < Route path= "/forgotpassword" element= {<Forgotpassword/>}/>
       <Route path= '/signup' element= {<Signup/>}/>
       
      </Routes>
       </div> 
      )
  )


}

export default App;
