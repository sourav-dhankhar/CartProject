import React from "react";
import image from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="Image"/>
            </div>
        </React.Fragment>
    )
}

export default Header;