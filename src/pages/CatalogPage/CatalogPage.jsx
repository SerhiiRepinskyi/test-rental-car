import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItemsCars,
  selectIsLoading,
  selectError,
} from "../../redux/selectors";
import CarCard from "../../components/CarCard";
import { fetchCars, fetchLoadMoreCars } from "../../redux/carsOperations";

import { ListCatalog } from "./CatalogPage.styled";


const CatalogPage = () => {
  const dispatch = useDispatch();
  const itemsCars = useSelector(selectItemsCars);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchLoadMoreCars(currentPage));
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const isShowList = itemsCars.length > 0;
  const isShowButton =
    itemsCars.length > 0 && !isLoading && !(itemsCars.length % 8);

  return (
    <section>
      {/* <SideBar /> */}

      {isShowList && (
        <ListCatalog>
          {itemsCars.map((car) => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
        </ListCatalog>
      )}

      {isShowButton && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}

      {isLoading && !error && <b>Request in progress...</b>}
      {error && error}
    </section>
  );
};

export default CatalogPage;
