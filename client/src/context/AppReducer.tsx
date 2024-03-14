interface Action {
    type: string
    payload: any
}

const reducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'SET_TYPICODE_USERS':
            return {
                ...state,
                typicodeUsers: action.payload
            }
        default:
        return state
    }
}

export default reducer