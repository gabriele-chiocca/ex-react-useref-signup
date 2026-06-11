import { useState, useRef } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const nameRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const specRef = useRef();
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [description, setDescription] = useState('');

  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [descriptionTouched, setDescriptionTouched] = useState(false);

  const [success, setSuccess] = useState(false);

  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\";

  const verifyUsername = (e) => {
    if (username.length < 6) {
      console.log('Username deve avere almeno 6 caratteri');
      return false;
    }

    for (const char of username) {
      if (letters.includes(char) || numbers.includes(char)) {
      } else {
        return false;
      }
    }
    return true;
  };

  const verifyPassword = (e) => {
    if (password.length < 8) {
      console.log('La password deve avere almeno 8 caratteri');
      return false;
    }

    let hasNumber = false;
    let hasLetter = false;
    let hasSymbols = false;

    for (const char of password) {
      if (letters.includes(char.toLocaleLowerCase())) {
        hasLetter = true;
      } else if (numbers.includes(char)) {
        hasNumber = true;
      } else if (symbols.includes(char)) {
        hasSymbols = true;
      } else {
        console.log(
          'La password non contiene uno tra Lettere, simboli o caratteri',
        );
        return false;
      }
    }

    if (hasLetter && hasNumber && hasSymbols) {
      console.log('La password è compilata correttamente');
      return true;
    } else {
      console.log('Compilata non correttamente, inserisci una nuova password');
      return false;
    }
  };

  const verifyDescription = (e) => {
    const trimmedDescription = description.trim();

    if (trimmedDescription.length >= 100 && trimmedDescription.length <= 1000) {
      console.log('Descrizione accettata');
      return true;
    } else {
      console.log(
        `La descrizione è al disotto della lunghezza minima 100 caratteri o massima 1000 consentita, la sua lunghezza è: ${trimmedDescription.length}`,
      );
      return false;
    }
  };

  const verifyCompiledForm = (e) => {
    if (nameRef.current.value === '')
      return console.log('Il campo Name non è compilato');
    if (username === '')
      return console.log('Il campo Username non è compilato');
    if (password === '')
      return console.log('Il campo password non è compilato');
    if (specRef.current.value === '')
      return console.log('Il campo Specializzazione non è compilato');
    if (yearsOfExperience === '')
      return console.log('Il campo Anni di Esperienza non è compilato');
    if (description === '')
      return console.log('Il campo Descrizione non è compilato');
    else {
      console.log('Il form ha i campi compilati');
      return true;
    }
  };

  const submit = (e) => {
    e.preventDefault();

    if (
      verifyCompiledForm() &&
      yearsOfExperience >= 0 &&
      verifyPassword() &&
      verifyDescription()
    ) {
      setSuccess(true);

      console.log(`Hai inviato il submit con i seguenti dati:
      - Name : ${nameRef.current.value}
      - Username: ${username}
      - Password: ${password}
      - Specializzazione: ${specRef.current.value}
      - Esperienza: ${yearsOfExperience}
      - Description: ${description}
      `);
    } else {
      console.log(
        'Hai messo un numero negativo negli anni di esperienza o non hai compilato il form in modo corretto, non è possibile inviarlo',
      );
    }
  };

  if (success) {
    return <SuccessMessage></SuccessMessage>;
  }

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
              ref={nameRef}
              placeholder="Inserisci il nome completo"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${usernameTouched ? (verifyUsername() ? `border border-success` : `border border-danger `) : ``}`}
              id="input-username"
              onChange={(e) => setUsername(e.target.value)}
              onBlur={(e) => setUsernameTouched(true)}
              value={username}
              placeholder="Inserisci il tuo Username"
            />
            {usernameTouched && !verifyUsername() && (
              <div className="mt-2  text-danger">
                <p className="h5">
                  Username non valido deve superare i 6 caratteri, e contenere
                  solo numeri e lettere
                </p>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${passwordTouched ? (verifyPassword() ? `border border-success` : `border border-danger `) : ``}`}
              id="input-password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => setPasswordTouched(true)}
              value={password}
              placeholder="Inserisci la tua password"
            />
            {passwordTouched && !verifyPassword() && (
              <div className="mt-2  text-danger">
                <p className="h5">
                  Password non valida deve superare 8 caratteri, e contenere
                  almeno 1 numero, 1 lettera ed 1 simbolo
                </p>
              </div>
            )}
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
              ref={specRef}
            >
              <option value={''}>Scegli la specializzazione</option>
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
              className={`form-control ${descriptionTouched ? (verifyDescription() ? `border border-success` : `border border-danger `) : ``}`}
              id="input-description"
              onChange={(e) => setDescription(e.target.value)}
              onBlur={(e) => setDescriptionTouched(true)}
              value={description}
              placeholder="Inserisci qui la descrizione"
            />

            {descriptionTouched && !verifyDescription() && (
              <div className="mt-2  text-danger">
                <p className="h5">
                  La descrizione è al disotto della lunghezza minima 100
                  caratteri o massima 1000 consentita
                </p>
              </div>
            )}
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

function SuccessMessage() {
  return (
    <div className="container bg bg-success rounded">
      <div className="mt-5 p-5 text-white">
        <h2>Complimenti ti sei registrato</h2>
      </div>
    </div>
  );
}

export default App;
