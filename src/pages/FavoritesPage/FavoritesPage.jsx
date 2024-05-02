import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import CarCard from "../../components/CarCard";
import FiltersForm from "../../components/FiltersForm";
import { selectFilters } from "../../redux/selectors";
import { fetchAllCars } from "../../redux/carsOperations";
import getVisibleCarsByFilters from "../../helpers/getVisibleCarsByFilters";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {
  Container,
  TextSkeleton,
  TextSkeletonFilter,
} from "./FavoritesPage.styled";
import { CatalogList } from "../CatalogPage/CatalogPage.styled";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchAllCars());

    if (favoriteCars.length === 0) {
      Notify.success(`There are no favorite cars yet`);
    } else if (favoriteCars.length === 1) {
      Notify.success(`Only ${favoriteCars.length} car added to favorites`);
    } else {
      Notify.success(`${favoriteCars.length} cars added to favorites`);
    }
  }, [dispatch, favoriteCars]);

  // Якщо є хоча б один фільтр - getVisibleCarsByFilters(), інакше рендеримо favoriteCars
  const visibleFavoriteCars =
    filters.brand || filters.price || filters.minMileage || filters.maxMileage
      ? getVisibleCarsByFilters(favoriteCars, filters)
      : favoriteCars;

  useEffect(() => {
    if (
      filters.brand ||
      filters.price ||
      filters.minMileage ||
      filters.maxMileage
    ) {
      Notify.success(`Found ${visibleFavoriteCars.length} car(s)`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleFavoriteCars.length]);

  const isFavoriteCars = favoriteCars.length > 0;
  const isShowFavoriteList = visibleFavoriteCars.length > 0;

  return (
    <section>
      <Container>
        {isFavoriteCars ? (
          <FiltersForm />
        ) : (
          <TextSkeleton>There are no favorite cars yet.</TextSkeleton>
        )}

        {isShowFavoriteList && (
          <CatalogList>
            {visibleFavoriteCars.map((car) => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </CatalogList>
        )}

        {!isShowFavoriteList && isFavoriteCars && (
          <TextSkeletonFilter>
            No cars found with selected filters.
          </TextSkeletonFilter>
        )}
      </Container>
    </section>
  );
};

export default FavoritesPage;
