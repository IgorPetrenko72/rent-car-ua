import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./Layout.module.css";

export default function Layout () {
    return (
        <>
            <header className={css.header}>
        <div className={css.container}>
          <NavLink className={css.link} to="/">
            {/* <LogoIcon width="32" height="32" /> */}
            Car Rental
          </NavLink>

          <p className={css.title}>
            Car Rental – Search, Compare, and Save up to 70%!
          </p>

          <NavLink className={css.link} to="/favourites">
            Favourites
            {/* <ActiveIcon width="32" height="32" /> */}
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