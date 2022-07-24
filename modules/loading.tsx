// Actions
const SET_LOADING = "loading/SET_LOADING";

// Action functions
export const setLoading = loadingState => ({
    type : SET_LOADING, loadingState
})

// Store State Lists
const initialState = {
    loadingState: false
};

// Switch / Case Redux Actions
export default function loading(state = initialState, action) {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loadingState: action.loadingState
            }
        default:
            return state;
    }
}