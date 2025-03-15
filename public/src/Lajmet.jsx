import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Lajmet() {
  return (
    <>
      <div id="lajmi" className="container py-5">
        {/* Main News Section */}
        <div className="text-center mb-5">
        <a id="lajmet"></a>
          <h1 className="lajmeth1">Lajmet</h1>
          <p  className="text-muted">
            Këtu mund të informoheni me më të rejat te klubit 
          </p>
        </div>

        {/* News Cards */}
        <div className="row">
          {/* First News Card */}
          <div className="col-md-4 mb-4 ">
            <div className="card h-100 shadow-sm lajm">
              <div className="card-body">
                <h5 className="card-title">
                  Lajmi 1
                </h5>
                <p className="card-text ">September 11, 2022</p>
                <p className="card-text">
                 KF VUSHTRRIA pergatitet per nje sezone te gjate
                </p>
              </div>
            </div>
          </div>

          {/* Second News Card */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm lajm">
              <div className="card-body">
                <h5 className="card-title">
                  Lajmi 2
                </h5>
                <p className="card-text">September 9, 2022</p>
                <p className="card-text">
                KF VUSHTRRIA pergatitet per nje sezone te gjate
                </p>
              </div>
            </div>
          </div>

          {/* Third News Card */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm lajm">
              <div className="card-body">
                <h5 className="card-title">
                  Lajmi 3
                </h5>
                <p className="card-text">September 10, 2022</p>
                <p className="card-text">
                KF VUSHTRRIA pergatitet per nje sezone te gjate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="bg-light py-5">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="eventet">Eventet</h2>
            </div>
            <div className="row">
              {/* Event 1 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      KF Vushtrria pergatitet per ndeshjet para-sezonale
                    </h5>
                    <p className="card-text">September 11, 2022</p>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                    KF Vushtrria pergatitet per ndeshjet para-sezonale
                    </h5>
                    <p className="card-text">September 9, 2022</p>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                    KF Vushtrria pergatitet per ndeshjet para-sezonale
                    </h5>
                    <p className="card-text">September 10, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </div>
    </>
  );
}
