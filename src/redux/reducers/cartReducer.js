import actionTypes from "./../actionTypes";

const intialState = {
  cart: [],
  isLoading: true,
  error: null,
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.CART_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload?.message };

    case actionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: action.payload };

    case actionTypes.CREATE_ITEM:
      return { ...state, cart: state.cart.concat(action.payload) };

    case actionTypes.UPDATE_ITEM:
      //* Aksiyonun payload'ı ile gelen güncel elemanın dizideki eski halini güncelle
      const updated = state.cart.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, cart: updated };

    case actionTypes.DELETE_ITEM:
      const filtred = state.cart.filter((i) => i.id !== action.payload);

      return { ...state, cart: filtred };

    default:
      return state;
  }
};

export default cartReducer;
