import {useState} from 'react';

import '../styles/App.scss';

function App() {
  const [ fullname, setFullname ] = useState( '' );
  const [ showGreeting, setShowGreeting ] = useState('hide');

  const [ error, setError ] = useState( '' );
  const [ claseError, setClaseError ] = useState( '' );

  const handleInput = (ev) => {
    setFullname( ev.target.value );
  };

  const handleGreet = (ev) => {
    ev.preventDefault();

    if( fullname === 'Ivanico' ) {
      setError('Nombre prohibido. Informaremso a las aurotirdades')
      setClaseError('danger')
      setShowGreeting('hide');
    }
    else if( fullname === 'Peppino' ) {
      setError('No puedes usar ese nombre!!!')
      setShowGreeting('hide');
    }
    else {
      fetch
      setError('');
      setShowGreeting('show');
    }
  };

  
  return (
    <div className="page darkmode">
      <header className="header">
        <h1 className="header__title">Clase de repaso</h1>
      </header>
      <main>
        <form onSubmit={handleGreet}>
          <div>
            <label htmlFor="fullname">Nombre</label>
            <input onInput={handleInput} type="text" name="fullname" id="fullname" />
          </div>
          <div className={claseError}>{error}</div>
          <div>
            <button type="submit">Saludar</button>
          </div>
        </form>

        { showGreeting === 'show' && (
          <section>
            ¡Holis {fullname}!
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
