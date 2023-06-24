import React from "react";
import classes from "./spinner.module.css";


export const Spinner = () => (
    <header style={{display: "block", marginTop: "4em"}}>
      <div style={{color: "orange"}}>Loading...</div>
      <div className={classes.loader}>Loading...</div>
    </header>
);