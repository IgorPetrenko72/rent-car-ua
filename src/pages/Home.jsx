import css from "./Home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>
                <div md={
                        {
                            size: 6,
                            offset: 0
                        }} className={css.homeContent}>
                        <h1>
                            You pick up the car and we will take care of rest.
                        </h1>
                        <p>Looking for a great deal on a new or used car near you? At Car.Rent we have a wide range of new and used cars for sale at great prices.</p>
                        <NavLink className={css.mx2} to="/catalog">
                            Get Started
                        </NavLink>                
                </div>
            </div>
        </>

    )
}