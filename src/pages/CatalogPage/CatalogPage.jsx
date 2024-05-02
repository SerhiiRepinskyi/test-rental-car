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
import getVisibleCarsByFilters from "../../helpers/getVisibleCarsByFilters";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {
  Container,
  CatalogList,
  BtnLoadMore,
  TextLoading,
  TextSkeleton,
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

  // Якщо є хоча б один фільтр - getVisibleCarsByFilters(), інакше рендеримо itemLimitCars (12 карток)
  const visibleCars =
    filters.brand || filters.price || filters.minMileage || filters.maxMileage
      ? getVisibleCarsByFilters(allCars, filters)
      : itemLimitCars;
  
  useEffect(() => {
    if (
      filters.brand ||
      filters.price ||
      filters.minMileage ||
      filters.maxMileage
    ) {
      Notify.success(`Found ${visibleCars.length} car(s)`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCars.length]);

  const isShowList = visibleCars.length > 0;

  const isShowButton =
    visibleCars.length > 0 && !isLoading && !(visibleCars.length % 12);

  return (
    <section>
      <Container>
        {!isLoading && !error && <FiltersForm />}

        {isShowList && (
          <CatalogList>
            {visibleCars.map((car) => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </CatalogList>
        )}

        {isLoading && !error && (
          <TextLoading>Request in progress...</TextLoading>
        )}

        {!isLoading && !error && !isShowList && (
          <TextSkeleton>No cars found with selected filters.</TextSkeleton>
        )}

        {isShowButton && (
          <BtnLoadMore type="button" onClick={handleLoadMore}>
            Load more
          </BtnLoadMore>
        )}

        {error && <TextLoading>{error}</TextLoading>}
      </Container>
    </section>
  );
};

export default CatalogPage;
