import React from "react"
import { Gallery } from "react-grid-gallery";

export default function Sponzor(){

    const images = [
        {
          src: "https://media.licdn.com/dms/image/v2/D4E0BAQFu0TC_VbFStw/company-logo_200_200/company-logo_200_200/0/1710408869681/interex_supermarket_logo?e=2147483647&v=beta&t=qv7f-ycmreN5a2wlivJKuc5ilNU4PdfqKZQwgUnQ_74",
          width: 320,
          height: 230,
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuKuCgc4odGsCmkJPcjuLnG4xNGlIqKswbg&s",
          width: 320,
          height: 212,
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55QNFwBRN0iToW8jTG4c8oeyfwUX66gyWsA&s",
          width: 320,
          height: 212,
        },
        {
          src: "https://emonacenter.com/wp-content/uploads/2022/11/LogoEmonacenter1.png",
          width: 320,
          height: 212,
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDw1XqwAphvTvR-dUr0JSOpAygawaTDgalg&s",
          width: 320,
          height: 212,
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvVuGz8yabzXRWZsPvAESj_l_EAIQLBVI4Q&s",
          width: 320,
          height: 212,
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c-tk5h5Lco_tByy5QCNIIiVjBI5058U9CQ&s",
          width: 320,
          height: 212,
        },
        {
          src: "https://i.vimeocdn.com/video/1803015833-58470c86151dc37e584fb335c99527e568cad2b03fac38d3c0a5946c16ee0fc1-d?f=webp",
          width: 320,
          height: 212,
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6qJ6vKKuoEctgccy9YJO-LTGRuzFF_JqwQ&s",
          width: 320,
          height: 212,
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqU2JQPGsq_qcU2AYdX7OZaWVexhYZmrzCpA&s",
          width: 320,
          height: 212,
        },
        {
          src: "https://usercontent.one/wp/www.dijari.co/wp-content/uploads/2022/04/Logo-PNG.png?media=1691327051",
          width: 320,
          height: 212,
        },
        {
          src: "https://kiesaportal.rks-gov.net/inc/media/5D4DEC60-5F40-4048-8C43-7A819AE94302.png",
          width: 320,
          height: 212,
        },
      ];
    return(
        <div>

        <div>
        <h2 className="sponzori pb-4 border-bottom" >Sponzoret tone</h2>
        </div>
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
        </div>
    )
}