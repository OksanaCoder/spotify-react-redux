export default function (state = {}, action) {
    switch (action.type) {
        case "SET_ARTIST_NAME":
            return {
                ...state,
                data: action.payload
            };
        case "TOGGLE_LOADING":
            return{
                ...state,
                loading: !state.loading
            }
        default:
            return state;
    }
}
