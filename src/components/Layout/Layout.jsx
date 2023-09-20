import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { img } from '../../images/img';
import css from "./Layout.module.css";

export default function Layout () {
    return (
        <>
            <header className={css.header}>
        <div className={css.container}>
          <NavLink to="/">
            <img src={img.logo} alt="logo" height={150} width={150} />
          </NavLink>

          <NavLink to="/favourites">
            <img className={css.heart}src={img.heart} alt="logo" height={32} width={32} />
         </NavLink>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
        </> 
    )
}