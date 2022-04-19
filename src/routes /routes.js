import { Route, Routes } from "react-router"
import Login from '../components/login'
import About from '../components/about'
import Forgotpassword from '../components/forgotpassword'
import Contactus from '../components/contactus';
import Signup from '../components/signup';
import App from '../App'
import NotFound from '../components/notfound'
import Home from "../components/secure/home";
import RequireAuth from "../services/require-auth";
import Homepage from "../components/homepage";
import Results from "../components/secure/results";
import Emailsent from "../components/emailsent";

const MyRoutes = () => {
    return (
        <Routes>
            < Route path="/" element={<Homepage />} />
            < Route path="/about" element={<About />} />
            < Route path="/contactus" element={<Contactus />} />
            < Route path="/forgotpassword" element={<Forgotpassword />} />
            < Route path='/signup' element={<Signup />} />
            < Route path="*" element={<NotFound/>} />
            < Route path= "/login" element= {<Login /> }/> 
            < Route path= "/emailsent" element= {<Emailsent /> }/> 
            <Route path= "/Home" element= {
            < RequireAuth> 
                <Home /> 
            </RequireAuth> 
            }/>
            <Route path= "/results" element= {
            < RequireAuth> 
                <Results /> 
            </RequireAuth> 
            }/> 

        </Routes>
    )
}
export default MyRoutes; 