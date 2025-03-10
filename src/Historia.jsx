import React from 'react';

export default function Historia() {
  return (
    <div className="container py-5">
      {/* Main Heading */}
      <div className="text-center mb-4">
        <h1 id='klub' className="display-4">Historia e Klubit</h1>
        <p className="text-muted">Me shume per historine e klubit.</p>
      </div>

      {/* Card for Content */}
      <div id='histo' className="card shadow-lg border-0 rounded">
        <div className="card-body">
          <h3 className="card-title">Rreth Vushtrria FC</h3>
          <p className="card-text">
            Vushtrria FC është një nga klubet më të vjetra të futbollit në Kosovë, me një histori të pasur që fillon nga themelimi i tij në vitin 1922. Klubi ka qenë përherë një simbol i pasionit për futbollin dhe i krenarisë për qytetin e Vushtrrisë.
          </p>

          {/* Timeline Section */}
          <div className="timeline mt-5">
            <h4>Pikat Kryesore në Historinë e Klubit:</h4>
            <ul className="list-group">
              <li className="list-group-item">1922 - Themelimi i klubit</li>
              <li className="list-group-item">1952 - Fitimi i titullit të parë kampion</li>
              <li className="list-group-item">1998 - Rikthimi në Superligë pas luftës</li>
              <li className="list-group-item">2013/2014 - Kampion i Superliges</li>
              <li className="list-group-item">2020 - Ndërtimi i stadiumit të ri</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
