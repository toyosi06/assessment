import { createState } from "@hookstate/core"

export const initial = {
    user: {},
    questions: [],
    answers: {}, 
    results: [],

}
const store = createState(initial)
export default store 