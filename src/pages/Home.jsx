import { useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Error from "./../components/Error";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../redux/actions/restActions";
import RestaurantCard from "../components/RestaurantCard";

export const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );
  console.log(error);

  const dispatch = useDispatch();

  const retry = () => dispatch(getRestaurants());

  //* 1.Yöntem
  // useEffect(() => {
  //   dispatch({ type: actionTypes.REST_LOADING });

  //   axios
  //     .get("http://localhost:3001/restaurants")
  //     .then((res) => dispatch(setRestaurants(res.data)))
  //     .catch((err) => dispatch({ type: actionTypes.REST_ERROR, payload: err }));
  // }, []);

  //! REDUX THUNK YÖNTEMİ İLE YAPILAN API

  return (
    <div className="container">
      <h1 className="font-semibold text-lg md:text-xl">
        Yakınınızdaki Restaurantlar
      </h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};
