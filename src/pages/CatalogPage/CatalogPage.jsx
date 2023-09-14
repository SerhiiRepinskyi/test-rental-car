import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/selectors";

import CarsList from "../../components/CarsList";
import { fetchCars } from "../../redux/carsOperations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <section>
      {/* <SideBar /> */}

      {isLoading && !error && <b>Request in progress...</b>}
      {error && error}

      <CarsList />
    </section>
  );
};

export default CatalogPage;
