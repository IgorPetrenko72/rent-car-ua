import { Route, Routes, Navigate } from "react-router-dom";
import  Layout  from "./Layout";
import  Home  from "pages/Home";
import { Catalog } from "pages/Catalog";
import { Favorites } from "pages/Favorites";

export const App = () => {
  return (
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
  );
};
