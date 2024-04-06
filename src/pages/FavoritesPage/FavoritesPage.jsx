import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import CarCard from "../../components/CarCard";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Container, TextSkeleton } from "./FavoritesPage.styled";
import { CatalogList } from "../CatalogPage/CatalogPage.styled";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  useEffect(() => {
    if (favoriteCars.length === 0) {
      Notify.success(`There are no favorite cars yet`);
    } else if (favoriteCars.length === 1) {
      Notify.success(`Only ${favoriteCars.length} car added to favorites`);
    } else {
      Notify.success(`${favoriteCars.length} cars added to favorites`);
    }
  }, [favoriteCars]);

  const isShowFavoriteList = favoriteCars.length > 0;

  return (
    <section>
      <Container>
        {!isShowFavoriteList && (
          <TextSkeleton>There are no favorite cars yet</TextSkeleton>
        )}

        {isShowFavoriteList && (
          <CatalogList>
            {favoriteCars.map((car) => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </CatalogList>
        )}
      </Container>
    </section>
  );
};

export default FavoritesPage;
