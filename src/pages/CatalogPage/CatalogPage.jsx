import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItemsCars,
  selectIsLoading,
  selectError,
} from "../../redux/selectors";
import { fetchCars, fetchLoadMoreCars } from "../../redux/carsOperations";
import CarCard from "../../components/CarCard";
// import FiltersForm from "../../components/FiltersForm";
import { Container, CatalogList, BtnLoadMore } from "./CatalogPage.styled";

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
      <Container>
        {/* <FiltersForm /> */}

        {isShowList && (
          <CatalogList>
            {itemsCars.map((car) => (
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
