export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
    // there is a inititial amount inside the basket, iterate through per item for total
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state;
    }
};

export default reducer;