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

  return (
    <div className="container mt-5">
      <h1>Form registrazione</h1>

      <div>
        <form action="">
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
              id="input-username"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Inserisci la tua password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
