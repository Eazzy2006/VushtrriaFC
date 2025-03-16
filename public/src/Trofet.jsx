import { Link } from 'react-router-dom'; // Import Link for navigation

export default function Trofet() {

  

  return (
    <div className="container px-4 py-5" id="custom-cards">
      <a id="klubi"></a>
      <h2  className="lajmeth1 pb-2 border-bottom">Klubi</h2>
      <p className='kliko'>Klikoni per te pare me shume</p>


      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {/* Skuadra Card */}
        <Link to="/skuadra" style={{ color: "white", textDecoration: "none" }}>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGq_8EOnyp7gBo1LwpHOPnc3sXsDxa7XhHzw&s')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
               
                  Skuadra
                
              </h3>
            </div>
          </div>
        </div>
        </Link>

        {/* Galeria Card */}
        <Link to="/galeria" style={{ color: "white", textDecoration: "none" }}>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0YeffHpANlJ0FCeVumOX_Yk4AlqgJh3P-g&s')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">

                  Galeria
                
              </h3>
            </div>
          </div>
        </div>
        </Link>
        {/* Historia Card */}
        <Link to="/historia" style={{ color: "white", textDecoration: "none" }}>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyggGCax-BFlolFriNS3GSUTBAXiGA2lNg0w&s')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">

                  Historia e Klubit
                
              </h3>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
