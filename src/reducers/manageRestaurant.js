import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            return {...state, restaurants: [...state.bands, action]}
        default:
            return state;
        }
}
