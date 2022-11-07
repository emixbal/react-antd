import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state
    }
}

const defaultState = () => ({
    isLoading: false,
})

export default main