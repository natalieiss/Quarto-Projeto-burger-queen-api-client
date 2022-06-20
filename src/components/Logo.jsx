import React from "react";
import styles from "./Logo.module.css"

function Logo({ customClass }) {
    return (
        <>
            <a href="/">
                <img className={styles[customClass]} src={require('../images/Logo.png')} alt="logo-heroes" />
            </a>
        </>
    )
}

export default Logo;