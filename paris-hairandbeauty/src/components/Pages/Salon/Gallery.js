import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [ 
      {
        original: 'https://preview.ibb.co/io1omQ/1.jpg',
        thumbnail: 'https://thumb.ibb.co/bEVg6Q/1.jpg',
      },
      {
        original: 'https://preview.ibb.co/h1xiLk/2.jpg',
        thumbnail: 'https://thumb.ibb.co/i3fQY5/2.jpg',
      },
      {
        original: 'https://preview.ibb.co/etk3Lk/3.jpg',
        thumbnail: 'https://thumb.ibb.co/j96XD5/3.jpg',
      },
      {
        original: 'https://preview.ibb.co/gNfERQ/4.jpg',
        thumbnail: 'https://thumb.ibb.co/g6EKt5/4.jpg',
      },
      {
        original: 'https://preview.ibb.co/eLkQY5/5.jpg',
        thumbnail: 'https://thumb.ibb.co/gkd16Q/5.jpg',
      },
      {
        original: 'https://preview.ibb.co/fzBA0k/6.jpg',
        thumbnail: 'https://thumb.ibb.co/mQzKt5/6.jpg',
      },      
      {
        original: 'https://preview.ibb.co/iqUxfk/7.jpg',
        thumbnail: 'https://thumb.ibb.co/g2STmQ/7.jpg',
      },

]

const Gallery = (props) => (
      <div>
        <ImageGallery
          items={images}
          slideInterval={3000}/>
      </div>
);


export default Gallery;