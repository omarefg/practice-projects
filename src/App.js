import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [facts, setFacts] = useState([])


  useEffect(() => {
    fetch('https://practice-projects.vercel.app/')
    .then(res => res.json())
    .then((res) => {
      setFacts(res.map(({ text }) => text))
    })
  }, [])

  return (
    <>
    {facts.length === 0 && (
      <p>Cargando...</p>
    )}
    <ul>
      {facts.map(item => {
        return (
          <li key={item}>{item}</li>
        )
      })}
    </ul>
    </>
  );
}

export default App;
