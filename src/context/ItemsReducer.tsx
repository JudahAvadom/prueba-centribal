export default (state,action) => {
    const {payload,type} = action
    switch (type) {
        case "SET_COUNTER":
            return {
                ...state,
                counter: payload
            }
        case "GET_COUNTER":
            return {
                ...state,
                counter: payload
            }
        default:
            return state
    }
}