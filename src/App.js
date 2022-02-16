import './App.css';
import Cards from './components/Cards';
import {useState, useEffect} from 'react';

const App = () => {
  const [personas, setPersonas] = useState([]);
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((response) => {
        setPersonas(response.results);
        setResultados(response.results);
      });
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setResultados(
        personas.filter(
          (persona) =>
            persona.name.first.toLowerCase().includes(query) ||
            persona.name.last.toLowerCase().includes(query)
        )
      );
    } else {
      setResultados(personas);
    }
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <h3> App Random People </h3>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Ingresa tu búsqueda aqui"
            onChange={(event) => setQuery(event.currentTarget.value)}
          />
        </div>
      </header>
      <main>
        <Cards data={resultados} />
      </main>
    </div>
  );
}

export default App;
