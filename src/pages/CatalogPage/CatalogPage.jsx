import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItemLimitCars,
  selectIsLoading,
  selectError,
  selectAllCars,
  selectFilters,
} from "../../redux/selectors";
import {
  fetchLimitCars,
  fetchLoadMoreCars,
  fetchAllCars,
} from "../../redux/carsOperations";
import CarCard from "../../components/CarCard";
import FiltersForm from "../../components/FiltersForm";
import {
  Container,
  CatalogList,
  BtnLoadMore,
  PCenterText,
} from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const itemLimitCars = useSelector(selectItemLimitCars);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const allCars = useSelector(selectAllCars);
  const filters = useSelector(selectFilters);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    dispatch(fetchLimitCars());
    dispatch(fetchAllCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchLoadMoreCars(currentPage));
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Функція для фільтрації списку всіх автомобілів
  const getVisibleCarsByFilters = (allCars, filters) => {
    const { brand, price, minMileage, maxMileage } = filters;

    let filteredCars = [...allCars]; // Копія cars для фільтрування

    // Послідовно фільтруємо за значеннями фільтрів, якщо вони вказані
    if (brand) {
      filteredCars = filteredCars.filter((car) => car.make === brand);
    }
    if (price) {
      filteredCars = filteredCars.filter(
        (car) => Number(car.rentalPrice.slice(1)) <= price
      );
    }
    if (minMileage) {
      filteredCars = filteredCars.filter((car) => car.mileage >= minMileage);
    }
    if (maxMileage) {
      filteredCars = filteredCars.filter((car) => car.mileage <= maxMileage);
    }

    return filteredCars;
  };

  // Якщо є хоча б один фільтр - getVisibleCarsByFilters, інакше рендеримо itemLimitCars (12 карток)
  const visibleCars =
    filters.brand || filters.price || filters.minMileage || filters.maxMileage
      ? getVisibleCarsByFilters(allCars, filters)
      : itemLimitCars;

  const isShowList = visibleCars.length > 0;

  const isShowButton =
    visibleCars.length > 0 && !isLoading && !(visibleCars.length % 12);

  return (
    <section>
      <Container>
        {!isLoading && <FiltersForm />}

        {isLoading && !error && (
          <PCenterText>Request in progress...</PCenterText>
        )}

        {isShowList && (
          <CatalogList>
            {visibleCars.map((car) => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </CatalogList>
        )}

        {!isLoading && !isShowList && (
          <PCenterText>No cars found with selected filters.</PCenterText>
        )}

        {isShowButton && (
          <BtnLoadMore type="button" onClick={handleLoadMore}>
            Load more
          </BtnLoadMore>
        )}

        {error && <PCenterText>{error}</PCenterText>}
      </Container>
    </section>
  );
};

export default CatalogPage;
