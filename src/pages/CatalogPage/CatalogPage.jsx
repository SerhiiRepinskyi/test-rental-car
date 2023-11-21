import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItemCars,
  selectIsLoading,
  selectError,
} from "../../redux/selectors";
import {
  fetchLimitCars,
  fetchLoadMoreCars,
  fetchAllCars,
} from "../../redux/carsOperations";
import CarCard from "../../components/CarCard";
// import FiltersForm from "../../components/FiltersForm";
import { Container, CatalogList, BtnLoadMore } from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const itemCars = useSelector(selectItemCars);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    dispatch(fetchLimitCars());
    dispatch(fetchAllCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchLoadMoreCars(currentPage));
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const isShowList = itemCars.length > 0;
  const isShowButton =
    itemCars.length > 0 && !isLoading && !(itemCars.length % 12);

  return (
    <section>
      <Container>
        {/* <FiltersForm /> */}

        {isShowList && (
          <CatalogList>
            {itemCars.map((car) => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </CatalogList>
        )}

        {isShowButton && (
          <BtnLoadMore type="button" onClick={handleLoadMore}>
            Load more
          </BtnLoadMore>
        )}

        {isLoading && !error && (
          <div
            style={{
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 500,
              margin: "100px auto 0",
            }}
          >
            Request in progress...
          </div>
        )}
        {error && error}
      </Container>
    </section>
  );
};

export default CatalogPage;
