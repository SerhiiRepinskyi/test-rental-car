import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import CarCard from "../../components/CarCard";
import { Container, TextSkeleton } from "./FavoritesPage.styled";
import { CatalogList } from "../CatalogPage/CatalogPage.styled";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

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
