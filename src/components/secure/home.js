import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import store from "../../store";
import { getAnswers, getListOfQuestions } from "../../services/questions";
import AssessmentQuestions from "./assesment-questions";


function Home() {
    const { user, questions, answers } = useState(store)
    console.log("got here", questions)
    // console.log(user.get())
    // console.log(questions.get())
    useEffect(() => {
       getAnswers (user.uid.get())
        getListOfQuestions()
    }, [])
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