import React, {useState} from "react";
import { PageTitle } from "./components/PageTitle/PageTitle";
import {PhotoViewer} from "./components/PhotoViewer/PhotoViewer"
import {ImageList} from "./components/ThumbnailImageList/ThumbNailImageList.jsx"

function App() {
  const [headerImage , setHeaderImage] = useState("https://picsum.photos/id/600/1600/900.jpg");

  return (
    <div>
      <header>
        <PageTitle title="React Photo Editor"/>
        <PhotoViewer src={headerImage}/>
      </header>
      <ImageList setHeaderImage={setHeaderImage}/>
    </div>
  );
}

export default App;



