import React from "react";
import classes from "./spinner.module.css";


export const Spinner = () => (
    <header style={{display: "flex"}}>
      <div>Loading...</div>
      <div className={classes}>spinner loading...</div>
    </header>
);