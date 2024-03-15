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
        case 'SET_GOOGLE_MAPS_SELECTED_USER':
            return {
                ...state,
                googleMapsSelectedUser: action.payload
            }
        return state
    }
}

export default reducer