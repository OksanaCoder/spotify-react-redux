export default function (state = {}, action) {
    switch (action.type) {
        case "SET_ALBUMS":
            return {
                ...state,
                data: action.payload
            };
        case "TOGGLE_LOADING":
            return{
                ...state,
                loading: !state.loading
            };
        case "CHOOSE_SONG":
                return{
                    ...state,
                    selectedSong: action.payload
         };
        default:
            return state;
    }
}
