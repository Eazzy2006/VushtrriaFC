import React from 'react';
import { Gallery } from "react-grid-gallery";

export default function Galeria() {
  const images = [
    {
      src: "./galeri/img1.jpeg",
      width: 320,
      height: 174,
    },
    {
      src: "./galeri/img2.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img3.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img4.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img5.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img6.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img7.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img8.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img9.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img10.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img11.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img12.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img13.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img14.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img15.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img16.jpeg",
      width: 320,
      height: 212,
    },
    {
      src: "./galeri/img17.jpeg",
      width: 320,
      height: 212,
    },
  ];

  return (
    <div>
      <Gallery images={images} />
      
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}