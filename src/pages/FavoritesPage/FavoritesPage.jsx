import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import CarCard from "../../components/CarCard";
import { CatalogList } from "../CatalogPage/CatalogPage.styled";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  const isShowFavoriteList = favoriteCars.length > 0;

  return (
    <section>
      <p>FavoritesPage-FavoritesPage</p>

      {isShowFavoriteList && (
        <CatalogList>
          {favoriteCars.map((car) => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
        </CatalogList>
      )}
    </section>
  );
};

export default FavoritesPage;
