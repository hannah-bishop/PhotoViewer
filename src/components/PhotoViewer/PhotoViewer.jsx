import React from "react";
import "./PhotoViewer.css";

export function PhotoViewer(prop) {    
    return (                
        <div className="my-class">               
           <img 
           src= {prop.src} 
           alt= "header picture" 
           className="header-picture"/>
        </div>
    );
}