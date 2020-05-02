import { HIDE_DROPDOWN } from './dropdown.types'

const INITIAL_STATE = {
    dropdownHidden: true,
}

const dropdownReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HIDE_DROPDOWN:
            return {
                ...state,
                dropdownHidden: action.payload
            }
        default:
            return state
    }
}

export default dropdownReducer