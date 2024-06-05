import { SET_SORT_OPTION } from "./actions";

const initialState = {
    sortOption: 'newest',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_OPTION:
            return {
                ...state,
                sortOption: action.payload,
            };
            default:
                return state;
    }
};

export default reducer;