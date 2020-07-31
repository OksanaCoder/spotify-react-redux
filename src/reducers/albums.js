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
         case "CHOOSE_AlBUM_COVER":
            return{
                ...state,
                selectedSong: action.payload
                
     };
     case 'PLAY_TRACK':
        return {
            ...state,
            isPlaying: !state.isPlaying,
        }
       
        default:
            return state;
    }
}
