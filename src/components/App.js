import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "../components/SharedLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
