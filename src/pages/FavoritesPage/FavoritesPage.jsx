import { useSelector } from "react-redux";
import { selectFavoriteCars, selectItemsCars } from "../../redux/selectors";
import CarCard from "../../components/CarCard";
import { CatalogList } from "../CatalogPage/CatalogPage.styled";

const FavoritesPage = () => {
  const favoriteCarIds = useSelector(selectFavoriteCars);
  const allCars = useSelector(selectItemsCars);

  const favoriteCars = allCars.filter((car) => favoriteCarIds.includes(car.id));

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
