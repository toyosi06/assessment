import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import store from "../../store";
import { getListOfQuestions } from "../../services/questions";
import AssessmentQuestions from "./assesment-questions";


function Home() {
    const { user, questions } = useState(store)
    console.log("got here", questions)
    // console.log(user.get())
    // console.log(questions.get())
    useEffect(() => {
        console.log("i ma here")
        getListOfQuestions()
    }, [])
    return (
        <div className="h-screen bg-sky-300">
            {/* <body> */}
                <div className="place-items-center">
                        <AssessmentQuestions listOfQuestions={questions.get()} />
                </div>
            {/* </body> */}
        </div>
    )

}

export default Home