import React from "react";
import "./ThumbnailImageList.css"

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push([`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`,imageNumberString])
        }
    }

    return urls;
}
export const imageUrls = getImageUrls();

function ImageList({setHeaderImage}){
    const urlArray = imageUrls.map(imageUrl => <li className="thumbnail-image-list" key={imageUrl[1]}> 
        <img src={imageUrl[0]} className="thumbnail-image" onClick={() => setHeaderImage(imageUrl)} alt={imageUrl[1]}/> 
    </li>)
    
   return (<ul className ="thumbnail-list">
       {urlArray}
   </ul>)
}

export {ImageList};