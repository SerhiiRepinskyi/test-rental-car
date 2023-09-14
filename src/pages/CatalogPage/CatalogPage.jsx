import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/selectors";

import CarsList from "../../components/CarsList";
import { fetchCars, fetchLoadMoreCars } from "../../redux/carsOperations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchLoadMoreCars(currentPage));
    setCurrentPage((prevPage) => prevPage + 1);
    console.log(currentPage);
  };

  return (
    <section>
      {/* <SideBar /> */}

      <CarsList />

      {!isLoading && currentPage <= 4 ? (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      ) : null}

      {isLoading && !error && <b>Request in progress...</b>}
      {error && error}
    </section>
  );
};

export default CatalogPage;
