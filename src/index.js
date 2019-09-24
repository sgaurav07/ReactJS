import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import images from './images';
import {Gallery, GalleryImage} from 'react-gesture-gallery';
//Creating a component with the help of HTML and reactjs
 
function Greeting() {
  return (
    <section>
      <Myname></Myname>
      <Navbarundername></Navbarundername>
      <Imageslider></Imageslider>
    </section>
  );
} 

const Myname = () => (
  <div className="titleName">
    <center><h1><strong>SAHARSH GAURAV</strong></h1></center>
  </div>
  
);

const Navbarundername = () => (
  <div className="navbar">
    <ul className="unordered">
      <li className="list"><a href="index.js"><h5>HOME</h5></a></li>
      <li className="list"><a href="index.js"><h5>HOME</h5></a></li>
      <li className="list"><a href="index.js"><h5>HOME</h5></a></li>
      <li className="list"><a href="index.js"><h5>HOME</h5></a></li>
      <li className="list"><a href="index.js"><h5>HOME</h5></a></li>
    </ul>
  </div>
);
const INITIAL_INDEX = 0
const Imageslider = () => {
  const [ind, setIndex] = React.useState(INITIAL_INDEX);
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      if (ind === images.length -1 ){
        setIndex(INITIAL_INDEX)
      }
      else{
        setIndex(ind + 1)
      }
    },2500)
    return() => clearInterval(interval)
  },[ind])
  return(
    <div className = "Imageslider" >
      <Gallery index = {ind}
      onRequestChange = {i => {
        setIndex(i);
      }}
      >
        {images.map(image => (
          <GalleryImage objectFit="cover" key= {ind} src = {image} />
        ) )}
      </Gallery>
    </div>
  );
};


ReactDOM.render(<Greeting />, document.getElementById('root'));