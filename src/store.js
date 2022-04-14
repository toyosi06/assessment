import { createState } from "@hookstate/core"

export const initial = {
    user: {},
    questions: []

}
const store = createState(initial)
export default store 