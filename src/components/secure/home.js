import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import store from "../../store";
import { getAnswers, getListOfQuestions, showResults} from "../../services/questions";
import AssessmentQuestions from "./assesment-questions";
import Results from "./results";





function Home() {
    const { user, questions, answers, results } = useState(store)
    console.log("got here", questions)
    // console.log(user.get())
    // console.log(questions.get())
    useEffect(() => {
       showResults (user.uid.get())
        getListOfQuestions()
        getAnswers(user.uid.get())
      
    }, [])
    if(results.length !== 0) {
        return <Results/>
    }
    
    return (
        <div className="h-screen bg-sky-300">
            {/* <body> */}
                <div className="place-items-center">
                        <AssessmentQuestions answersDictionary={answers.get()} listOfQuestions={questions.get()} />
                </div>
            {/* </body> */}
            
        </div>
    )

}

export default Home