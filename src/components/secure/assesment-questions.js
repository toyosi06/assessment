import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useState as useGlobalState } from "@hookstate/core";
import store from "../../store";
import { submitAnswers } from "../../services/questions";
import { questionsvalidationSchema } from "../../form-utils";
import {useNavigate } from "react-router";

 

const AssessmentQuestions = ({ listOfQuestions, answersDictionary }) => {
   const { user } = useGlobalState(store)
   const [answers, setAnswers] = useState({})
   const [previousAnswers, setPreviousAnswers] = useState({})
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
   const [processing, setProcessing] = useState(false)
   const navigate = useNavigate()
   const q = listOfQuestions[currentQuestionIndex]
   const questionId = q?.id
   const selectedAnswers = answersDictionary[questionId]
   console.log(answers, "***")
   useEffect(() => {
       setAnswers(selectedAnswers)
   },[selectedAnswers])
   const formik = useFormik({
       initialValues: {
       },
       onSubmit: async (values) => {
           setProcessing(true)
           submitAnswers(answers, onSuccess, true)
       },
   })
   const questionsIndex = currentQuestionIndex
   const next = () => {
       console.log ("next",answers)
       submitAnswers(answers, onNextSuccess)
   }
   const previous = () => {
       setAnswers(previousAnswers)
       setCurrentQuestionIndex(currentQuestionIndex - 1)
       console.log("prev", previousAnswers)
      
   }
   const onNextSuccess = (answers) => {
       setCurrentQuestionIndex(currentQuestionIndex + 1)
       setPreviousAnswers(answers)
       
   }
 


   const onSuccess = (answers) => { 
       navigate("/results")
   }
   

 
   let buttonHtml;
   if (questionsIndex === 0) {
       buttonHtml = (
           <>
           <div className="text-center text-white bg-blue-900 hover:bg-blue-700 absolute bottom-[20px] text w-[130px] h-[60px] text-5xl right-[20px]"> 
               <button onClick={next} type="button">Next</button>
            </div>
           </>
       );
   } else if (questionsIndex === listOfQuestions.length -1) {
       buttonHtml = (
           <>
           <div className="grid grid-cols-2"> 
           <div className="text-center text-white bg-blue-900 hover:bg-blue-700 absolute bottom-[20px] text w-[175px] h-[60px] text-5xl right-[190px]"> 
               <button onClick={previous} type="button">Previous</button>
            </div>
            <div className="text-center text-white bg-blue-900 hover:bg-blue-700 absolute bottom-[20px] text w-[150px] h-[60px] text-5xl right-[20px]"> 
               <button type="submit" className="">Submit</button>
            </div>
            </div> 
           </>
       );
   } else {
       buttonHtml =(
       <>
       <div className="grid grid-cols-2"> 
       <div className="text-center text-white bg-blue-900 hover:bg-blue-700 absolute bottom-[20px] text w-[175px] h-[60px] text-5xl right-[190px]"> 
               <button onClick={previous} type="button">Previous</button>
            </div>
        <div className="text-center text-white bg-blue-900 hover:bg-blue-700 absolute bottom-[20px] text w-[150px] h-[60px] text-5xl right-[20px]"> 
           <button onClick={next} type="button">Next</button>
        </div>
         </div>
       </>
       )
   }
   return (
       <form onSubmit={formik.handleSubmit} className="text-center box-border w-[1000px] h-[500px] absolute top-[100px] left-[200px]  bg-white rounded-lg">
           <div className="text-left mt-6 ml-5 text-6xl font-extrabold font-sans text-blue-900">Question {questionsIndex + 1}</div>
           <div className='p-[100px]'>  
           <div className="text-3xl absolute top-[130px] text-center left-[50px]">{q?.question}</div>
           <div>{q?.type === "multiple-choice" ?
               <>{q?.options.map((o, optionsIndex) => {
                   return (
                       <div key={`option${optionsIndex}`}>
                           <input 
                               type="radio"
                               id={`${q.id}-option${optionsIndex}`}
                               name={`${q.id}-option${optionsIndex}`}
                               onChange={() =>
                               {   
                                   formik.setFieldValue(q.id, o)
                                   setAnswers({ ...answers, answer: o, questionId: q.id, uid: user.uid.get() })
                               }
                               }
                               value={o}
                               checked={formik.values[q.id] === o || selectedAnswers?.answer === o}
                           />
                           {o}
                       </div>
 
                   )
               })}</>
               :
 
               <div className="absolute bottom-[220px] left-[210px] ">
                   <input className='text-5xl border-solid border-blue-900 border-4 black rounded-lg text-center 'id="Answer" name="Answer" placeholder='Enter Answer' value= {answers?.answer}
                   onChange={(e) => {
                       setAnswers({ ...answers, answer: e.target.value, questionId: q.id, uid: user.uid.get() })
                       }} />
               </div>
           }</div>
 
 
 
 
           <div className="">
               {buttonHtml}
           </div>
         </div>
       </form>
       
 
   );
};
 
export default AssessmentQuestions;