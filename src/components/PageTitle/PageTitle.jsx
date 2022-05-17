import React from "react";
import "./PageTitle.css";

export function PageTitle(prop) {    
    return (                
        <h1 className="page-title"> {prop.title} </h1>
    );
}