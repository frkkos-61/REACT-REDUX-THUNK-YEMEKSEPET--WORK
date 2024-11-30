//* Asenkron Thunk Aksiyonu
//*Sepet verilerini api'dan alıp reducer'a dispatch ile haber gönderecek

import { v4 } from "uuid";
import actionTypes from "../actionTypes";
import api from "./../../utils/api";

export const getCart = () => (dispatch) => {
  //* Action tetiklendiği ilk anda API isteği atmak
  dispatch({ type: actionTypes.CART_LOADING });
  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: actionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: actionTypes.CART_ERROR, payload: err }));
};

//* Ürünü api'a kaydettikten sonra reducer'a ekleneceğinin hbaeririni gönderir.
export const createItem = (item) => (dispatch) => {
  console.log(item);

  //*1) Sepete eklenecek olan ürünün bilgilerini biz belirliyoruz. Tamamen bağımsız bir ürün oluşturacağımız elemanlar için, id vb diğer bilgileri kendimiz oluşturuyoruz aslında.
  const newItem = {
    id: v4(),
    productId: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    photo: item.photo,
    amount: 1,
  };

  //*2) API'a sepete eklemek için istek atacağız
  api
    .post("/cart", newItem)
    //*3) ekleme işlemi başarılı olursa reducer'a haber vereceğiz
    .then(() => dispatch({ type: actionTypes.CREATE_ITEM, payload: newItem }));
};

//* Ürünün API'daki miktarını güncelledikten sonra reducer'a güncellendiğinin hbaerini gönder

export const updateItem = (id, newAmount) => (dispatch) => {
  //*API'a güncelleme isteği at
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    //*İstek başarılı olursa reducer'a haber gönder
    .then((res) =>
      dispatch({ type: actionTypes.UPDATE_ITEM, payload: res.data })
    );
};

//* Ürünü API'den silip reducer'a kaldırılması için haber gönder
export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: actionTypes.DELETE_ITEM, payload: id }));
};
