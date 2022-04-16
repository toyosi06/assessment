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
export const submitAnswers = async (answers, onSuccess, onFailure,isLast) => {
  const isCorrect = await checkCorrect(answers)
  answers = { isCorrect, ...answers }
  const db = getFirestore();
  if (answers.id) {
    //update
    setDoc(doc(db, "submissions", answers.id), answers, { merge: true })
      .then((d) => {
        if (onSuccess) {
          console.log("answers add", answers)
        if (isLast){
          const numberOfCorrect = await countCorrect(answers.uid)
          const numberOfIncorrect = await countIncorrect(answers.uid)
          await submitResults({numberOfCorrect,numberOfIncorrect,uid: answers.uid})
        }
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log("emailNotSent", error.message);
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  } else {
    addDoc(collection(db, "submissions"), answers)
      .then((d) => {
        if (onSuccess) {
          answers = { id: d.id, ...answers }
          console.log("answers add", answers)
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
export const checkCorrect = async ({ questionId, answer }) => {
  const db = getFirestore();
  const q = query(collection(db, "answers"),
    where("questionid", "==", questionId),
    where("answer", "==", answer));

  const querySnapshot = await getDocs(q);
  const isCorrect = querySnapshot.size === 1
  return isCorrect
}

export const getAnswers = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  const answers = {};
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    data.id = doc.id
    answers[data.questionId] = data
  });
  store.answers.set(answers);
  console.log(answers, "+++")
};

export const countCorrect = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submission"),
    where("isCorrect", "==", true),
    where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  return querySnapshot.size


};

export const countIncorrect = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submission"),
    where("isCorrect", "==", false),
    where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  return querySnapshot.size


};

export const showResults = async ({ uid }) => {
  const db = getFirestore();
  const q = query(collection(db, "results"),
    where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const results = []
  querySnapshot.forEach((doc) => {

    results.push(doc.data())

  });
  // console.log("got here", questions)
  store.results.set(results)
}

 const submitResults = async (results) => {
  const db = getFirestore();
  setDoc(doc(db, "results", results.uid), results, { merge: true })
    .then((d) => {
    })
    .catch((error) => {
      console.log("resultsNotSubmitted", error.message);
      throw error
    });
};
