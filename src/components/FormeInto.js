import React, { useState } from "react";

const FormeInto = () => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [osobe, setOsobe] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ime && prezime) {
      let osoba = {
        id: new Date().getTime().toString(),
        ime,
        prezime,
      };
      setOsobe((oldOsobe) => {
        return [...oldOsobe, osoba];
      });
      setIme("");
      setPrezime("");
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
              value={ime}
              onChange={(e) => setIme(e.target.value)}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='prezime'>Prezime:</label>
            <input
              name='prezime'
              type='text'
              value={prezime}
              onChange={(e) => setPrezime(e.target.value)}></input>
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
                {osoba.ime} {osoba.prezime}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FormeInto;
