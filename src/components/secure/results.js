import store from "../../store";
import { useState } from "@hookstate/core";
import {useNavigate } from "react-router-dom";
 
 
function Results() {
    const navigate = useNavigate()
  const { user, results } = useState(store)
  const uid = user.uid.get()
 
 
  console.log(results?.get(), "xxx")
 
  return (
    <div className="text-right ">
        <img src="images/congrats.png" alt="hey" width="700" height="300" className="absolute top-[0px] left-[0px]"></img>
          
          <h1 className="text-8xl font-extrabold absolute top-[50px] right-[50px] text-yellow-600"> Congratulations</h1>
          <h1 className=" absolute top-[175px] right-[125px] text-5xl font-bold"> You have submitted your test </h1> 
          <h1 className="text-7xl font-sans font-light relative top-[290px] right-[220px] text-gray-500"> Your Results </h1>
       
    <div className="bg-green-600 w-[240px] h-[140px] absolute bottom-[190px] right-[450px] text-center rounded-lg text-white font-bold text-5xl"> 
     <div className="relative bottom-[-10px]">  Questions Correct: {results[0]?.numberOfCorrect?.get()} </div> 
      </div>
    <div className="bg-red-600 w-[240px] h-[140px] absolute bottom-[190px] right-[120px] text-center rounded-lg text-center rounded-lg text-white font-bold text-5xl" >
      Questions Incorrect: {results[0]?.numberOfIncorrect?.get()}
      <div onClick={() => {navigate("/login")}} className='text-center mb-10 text-3xl bg-stone-500 hover:bg-blue-800 w-[200px] h-[70px] rounded-lg absolute bottom-[-170px] right-[-40px] shadow-lg'>
            <button type="submit" className=' font-sans font-extrabold text-white m-3 text-3xl'> Log Out </button> </div> 
      </div>




    </div>
 
  )
};
 
export default Results;
 
 


 
