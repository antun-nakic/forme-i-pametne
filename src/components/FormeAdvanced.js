import React, { useState } from "react";

export const FormeAdvanced = () => {
  const [covik, setCovik] = useState({
    id: new Date().getTime().toString(),
    ime: "",
    prezime: "",
    email: "",
    mjestoRodjenja: "",
    boja: "",
    pjesma: "",
  });
  const [osobe, setOsobe] = useState([]);

  const handleChange = (e) => {
    const naziv = e.target.name;
    const vrijednost = e.target.value;
    setCovik((stari) => {
      return { ...stari, [naziv]: vrijednost };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (covik.ime && covik.prezime) {
      setOsobe((stare) => {
        return [...stare, covik];
      });
      setCovik({
        id: new Date().getTime().toString(),
        ime: "",
        prezime: "",
        email: "",
        mjestoRodjenja: "",
        boja: "",
        pjesma: "",
      });
    }
  };

  return (
    <div className='container' style={{ backgroundColor: "azure" }}>
      <div className='row'>
        <form className='form col-md-6' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='ime'>Ime:</label>
            <input
              name='ime'
              type='text'
              value={covik.ime}
              onChange={handleChange}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='prezime'>Prezime:</label>
            <input
              name='prezime'
              type='text'
              value={covik.prezime}
              onChange={handleChange}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              name='email'
              type='text'
              value={covik.email}
              onChange={handleChange}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='mjestoRodjenja'>Mjesto rođenja:</label>
            <input
              name='mjestoRodjenja'
              type='text'
              value={covik.mjestoRodjenja}
              onChange={handleChange}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='boja'>Omiljena boja:</label>
            <input
              name='boja'
              type='text'
              value={covik.boja}
              onChange={handleChange}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='pjesma'>Omiljena pjesma:</label>
            <input
              name='pjesma'
              type='text'
              value={covik.pjesma}
              onChange={handleChange}></input>
          </div>
          <button type='submit' className='success'>
            Unesi osobu
          </button>
        </form>
        <div className='col-md-6'>
          <h3>Unesene osobe:</h3>
          {osobe.map((osoba) => {
            return (
              <p key={osoba.id}>
                {osoba.ime} {osoba.prezime} - Mjesto rođenja:{" "}
                {osoba.mjestoRodjenja}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
