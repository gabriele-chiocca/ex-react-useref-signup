import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [nameComplete, setNameComplete] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log(`Hai inviato il submit con i seguenti dati:
      - Name : ${nameComplete}
      - Username: ${username}
      - Password: ${password}
      - Specializzazione: ${specialization}
      - Esperienza: ${yearsOfExperience}
      - Description: ${description}
      `);
  };

  return (
    <div className="container mt-5">
      <h1>Form registrazione</h1>

      <div>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Nome Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="input-name"
              onChange={(e) => setNameComplete(e.target.value)}
              value={nameComplete}
              placeholder="Inserisci il nome completo"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="input-username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Inserisci il tuo Username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="input-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Inserisci la tua password"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputSpecializzazione"
              className="form-label"
            >
              Specializzazione
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option>Scegli la specializzazione</option>
              <option>Full Stack</option>
              <option>Frontend</option>
              <option>Backend</option>
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputAnniDiEsperienza"
              className="form-label"
            >
              Anni di esperienza
            </label>
            <input
              type="number"
              className="form-control"
              id="input-experience"
              onChange={(e) => setYearsOfExperience(e.target.value)}
              value={yearsOfExperience}
              placeholder="Inserisci il numero di anni riguardo la tua esperienza"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputDescription" className="form-label">
              Descrivi la tua esperienza da sviluppatore
            </label>
            <textarea
              rows={3}
              type="text-area"
              className="form-control"
              id="input-description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Inserisci qui la descrizione"
            />
          </div>

          <div>
            <button className="btn btn-primary" type="sumbit">
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
