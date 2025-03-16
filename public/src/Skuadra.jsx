import React from 'react';

const teamMembers = [
  { name: 'Theophilus Solomon', position: 'Sulmues', number: '', nationality: 'NG', nationalTeam: 'Nigeria' },
  { name: 'Viktor Angelov', position: 'Sulmues', number: '', nationality: 'MK', nationalTeam: 'Maqedonia' },
  { name: 'Dren Ahmeti', position: 'Sulmues', number: '21', nationality: 'XK', nationalTeam: 'Kosova' },
  { name: 'Drilon Fazliu', position: 'Sulmues', number: '99', nationality: 'XK', nationalTeam: 'Kosova' },
  { name: 'Hysen Tahiri', position: 'Sulmues', number: '7', nationality: 'XK', nationalTeam: 'Kosova' },
  { name: 'Besar Iseni', position: 'Mesfushor', number: '', nationality: 'MK', nationalTeam: 'Maqedonia' },
  { name: 'Rrezon Gashi', position: 'Mesfushor', number: '', nationality: 'XK', nationalTeam: 'Kosova' },
  { name: 'Edmond Likaj', position: 'Mesfushor', number: '6', nationality: 'XK', nationalTeam: 'Kosova' },
  { name: 'Ardin Dallku', position: 'Mbrojtes', number: '', nationality: 'XK', nationalTeam: 'Kosova' },
  { name: 'Bujar Shabani', position: 'Mbrojtes', number: '', nationality: 'AL', nationalTeam: 'Shqipëria' },
  { name: 'Gezim Krasniqi', position: 'Mbrojtes', number: '', nationality: 'AL', nationalTeam: 'Shqipëria' },
  { name: 'Valon Dedia', position: 'Mbrojtes', number: '', nationality: 'XK', nationalTeam: 'Kosova' },
  { name: 'Erdin Dushi', position: 'Mbrojtes', number: '', nationality: 'XK', nationalTeam: 'Kosova' },
  { name: 'Ardit Peposhi', position: 'Mbrojtes', number: '', nationality: 'AL', nationalTeam: 'Shqipëria' },
  { name: 'Gentrit Kovaqi', position: 'Mbrojtes', number: '31', nationality: 'FI', nationalTeam: 'Finlanda' },
  { name: 'Marly Koubassanath', position: 'Portjer', number: '99', nationality: 'CG', nationalTeam: 'Kongo' },
  { name: 'Arlis Shala', position: 'Portjer', number: '', nationality: 'AL', nationalTeam: 'Shqipëria' }
];


export default function Skuadra() {
  return (
    <div  className="container my-5">
      <h1 className="text-center mb-4">Skuadra Jonë</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div  key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div  className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.title}</p>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <p>
                  Nacionaliteti: {member.nationalTeam}
                </p>
                <p>
                  Pozicioni:  {member.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
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
