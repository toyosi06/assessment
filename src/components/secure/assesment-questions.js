import { useState } from "react";
import { useFormik } from "formik";
import { useState as useGlobalState } from "@hookstate/core";
import store from "../../store";
import { submitAnswers } from "../../services/questions";

const AssessmentQuestions = ({ listOfQuestions }) => {
    const { user } = useGlobalState(store)
    const [answers, setAnswers] = useState({})
    const [previousAnswers, setPreviousAnswers] = useState({})
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [processing, setProcessing] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState([])
    const formik = useFormik({


        initialValues: {

        },
        onSubmit: async (values) => {
            setProcessing(true)
            console.log("I am here")
        },
    })
    const questionsIndex = currentQuestionIndex
    const q = listOfQuestions[questionsIndex]
    const next = () => {
        console.log ("next",answers)
        submitAnswers(answers, onSuccess)
    }
    const previous = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setAnswers(previousAnswers)
        
    }
    const onSuccess = (answers) => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setPreviousAnswers(answers)
    }

    let buttonHtml;
    if (questionsIndex === 0) {
        buttonHtml = (
            <>
                <button className-='text-white bg-blue-700 hover:bg-blue-800' onClick={next} type="button"> Next</button>
            </>
        );
    } else if (questionsIndex === listOfQuestions.length - 1) {
        buttonHtml = (
            <>
                <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} type="button"> Previous</button>
                <button type="button" className=""> Submit</button>
            </>
        );
    } else {
        <>
            <button type="button"> Previous</button>
            <button onClick={previous} type="button"> Next</button>
        </>;

    }
    return (
        <form onSubmit={formik.handleSubmit} className="text-center box-border w-[1000px] h-[500px] w-[600px] h-[500px] absolute top-[100px] left-[200px] p-[100px] bg-white">
            <div className="text-left">Question {questionsIndex + 1}</div>
            <div>{q?.question}</div>
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
                                checked={formik.values[q.id] === o}
                            />
                            {o}
                        </div>

                    )
                })}</>
                :

                <div>
                    Answer:<input id="Answer" name="Answer" placeholder='Enter Answer' onChange={(e) => { setAnswers({ answer: e.target.value, questionId: q.id, uid: user.uid.get() }) }} />
                </div>
            }</div>




            <div className="text-center text-white bg-blue-700 hover:bg-blue-800">
                {buttonHtml}
            </div>

        </form>

    );
};

export default AssessmentQuestions;