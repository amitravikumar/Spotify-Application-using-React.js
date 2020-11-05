export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // ---->>>>>>>To be removed before the deployment to the firebase server
    token: 'BQBHMbbbCWaIdEkGbC-VfY8_nqOfFnQgmgOAItY8qV2zc3',
}

const reducer = (state, action) =>{
    console.log(action);

    //Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS': 
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;