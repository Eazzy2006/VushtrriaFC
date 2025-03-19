import React from "react";

export default function Next() {
  return (
    <div className="custom-background p-5 mb-0 rounded text-body-emphasis">
      <div className="col-lg-6 px-4">
        <a id="ndeshja"></a>
        <h1 id="radha" className="display-4 fst-italic text-white">NDESHJA E RADHËS</h1>
        <p className="lead my-3 text-white">
          Ndeshja e radhës do të jetë një përballje emocionuese, ku skuadra jonë synon të tregojë performancën më të mirë dhe të sigurojë pikët e nevojshme për të vazhduar rrugën drejt suksesit!
        </p>
      </div>

      {/* Match Box */}
      <div className="match-container">
        <a id="ndeshja"></a>       
        <div className="team">
          <img
            src="https://img.sofascore.com/api/v1/team/229761/image"
            width="70px"
            alt="FC Llapi"
          />
          <h5 className="team-name">FC Llapi</h5>
        </div>

        {/* Date and Time */}
        <div className="match-info">
          <img
            src="https://png.pngtree.com/png-clipart/20230522/original/pngtree-calendar-png-image_9167279.png"
            width="40px"
            alt="Calendar"
          />
          <h4 className="date-time">
            12/02/2025 <br />
            <span className="time">12:00 A.M</span>
          </h4>
        </div>

        {/* Team 2 */}
        <div className="team">
          <img src="../images/FC_Vushtrria.jpg" width="70px" alt="FC Vushtrria" />
          <h5 className="team-name">FC Vushtrria</h5>
        </div>
      </div>


      <script src="https://kit.fontawesome.com/450be798d4.js" crossorigin="anonymous"></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>

      
    </div>
  );
}
