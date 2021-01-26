import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':

            const restaurant = {
            id: cuid(),
            text: action.text
            }

            return {restaurants: [...state.restaurants, restaurant] }

        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

        default:
            return state;
        }
}
