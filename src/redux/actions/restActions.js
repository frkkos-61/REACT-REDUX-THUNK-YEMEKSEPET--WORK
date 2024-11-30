import axios from "axios";
import actionTypes from "../actionTypes";

//* Normal Redux Aksiyonu
const setRestaurants = (payload) => {
  return {
    type: actionTypes.REST_SUCCESS,
    payload,
  };
};

export default setRestaurants;

//* Redux Thunk - Asenkron Aksiyon
//? Fonksiyon içerisinde fonksiyon return ederiz.
export const getRestaurants = () => {
  return (dispatch) => {
    //*asenkron işlemler yapabilir.
    //*dispatch ile reducer'a haber gönderebiliyoruz
    dispatch({ type: actionTypes.REST_LOADING });

    axios
      .get("http://localhost:3001/restaurants")
      .then((res) =>
        dispatch({
          type: actionTypes.REST_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.REST_ERROR,
          payload: err,
        })
      );
  };
};
