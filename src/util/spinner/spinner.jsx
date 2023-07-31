import React from "react";
import classes from "./spinner.module.css";



export const Spinner = () => (
    <header className={classes.header}>
      <div style={{color: "orange"}}>Loading...</div>
      <div className={classes.loader}>Loading...</div>
    </header>
);