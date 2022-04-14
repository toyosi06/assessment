import { collection, query, where, getDocs, getFirestore, doc, setDoc, addDoc } from "firebase/firestore";
import store from "../store";


export const getListOfQuestions = async () => {
  const db = getFirestore();
  const q = query(collection(db, "questions"));
  console.log("got here1")
  const querySnapshot = await getDocs(q);
  const questions = []
  querySnapshot.forEach((doc) => {

    questions.push(doc.data())

  });
  // console.log("got here", questions)
  store.questions.set(questions)

}
export const submitAnswers = async (answers, onSuccess, onFailure) => {
  const db = getFirestore();
  if (answers.id) {
    //update
    setDoc(doc(db, "submissions", answers.id), answers, { merge: true })
      .then((d) => {
        if (onSuccess) {
          answers = {id: d.id, ...answers}
          console.log("answers add",answers)
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log("emailNotSent");
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  } else {
    addDoc(collection(db, "submissions"), answers)
      .then((d) => {
        if (onSuccess) {
          answers = {id: d.id, ...answers}
          console.log("answers add",answers)
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log(error.message);
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  }
 }; 
export const checkCorrect = async (questionId, answerId) => {
  const db = getFirestore();
  const q = query(collection(db, "answers"), 
  where("questionId", "==",  questionId), 
  where("answerId, ==, answerId")
  ); 

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}