import React, { useState } from 'react';

function App() {
  const [cadena, setCadena] = useState('');
  const [estado, setEstado] = useState('q0');
  const [resultados, setResultados] = useState([]);

  const transiciones = {
    q0: {
      A: 'q1',
      B: 'q12',
      C: 'q13',
    },
    q1: {
      G:'q2',
      H:'q2',
      I:'q2',
      J:'q2',
      K:'q2',
      L:'q2',
      M:'q2',
      N:'q2',
      Ñ:'q2',
      O:'q2',
      P:'q2',
      Q:'q2',
      R:'q2',
      S:'q2',
      T:'q2',
      U:'q2',
      V:'q2',
      W:'q2',
      X:'q2',
      Y:'q2',
      Z:'q2',
    },
    q12: {
      A:'q2',
      B:'q2',
      C:'q2',
      D:'q2',
      E:'q2',
      F:'q2',
      G:'q2',
      H:'q2',
      I:'q2',
      J:'q2',
      K:'q2',
      L:'q2',
      M:'q2',
      N:'q2',
      Ñ:'q2',
      O:'q2',
      P:'q2',
      Q:'q2',
      R:'q2',
      S:'q2',
      T:'q2',
      U:'q2',
      V:'q2',
      W:'q2',
      X:'q2',
      Y:'q2',
      Z:'q2',
    },
    q13: {
      A:'q2',
      B:'q2',
      C:'q2',
      D:'q2',
      E:'q2',
      F:'q2',
      G:'q2',
      H:'q2',
      I:'q2',
      J:'q2',
      K:'q2',
      L:'q2',
      M:'q2',
      N:'q2',
      Ñ:'q2',
      O:'q2',
      P:'q2',
      Q:'q2',
      R:'q2',
      S:'q2',
      T:'q2',
      U:'q2',
      V:'q2',
      W:'q2',
      X:'q2',
      Y:'q2',
    },
    q2: {
      A:'q3',
      B:'q3',
      C:'q3',
      D:'q3',
      E:'q3',
      F:'q3',
      G:'q3',
      H:'q3',
      I:'q3',
      J:'q3',
      K:'q3',
      L:'q3',
      M:'q3',
      N:'q3',
      Ñ:'q3',
      O:'q3',
      P:'q3',
      Q:'q3',
      R:'q3',
      S:'q3',
      T:'q3',
      U:'q3',
      V:'q3',
      W:'q3',
      X:'q3',
      Y:'q3',
      Z:'q3'
    },
    q3: {
      "-":'q4'
    },
    q4: {
      0:'q5',
      1:'q10',
      2:'q10',
      3:'q10',
      4:'q10',
      5:'q10',
      6:'q10',
      7:'q10',
      8:'q10',
      9:'q10',
    },
    q5: {
      0:'q6',
      1:'q11',
      2:'q11',
      3:'q11',
      4:'q11',
      5:'q11',
      6:'q11',
      7:'q11',
      8:'q11',
      9:'q11',
    },
    q6: {
      0:'q7',
      1:'q7',
      2:'q7',
      3:'q7',
      4:'q7',
      5:'q7',
      6:'q7',
      7:'q7',
      8:'q7',
      9:'q7',
    },
    q10: {
      0:'q11',
      1:'q11',
      2:'q11',
      3:'q11',
      4:'q11',
      5:'q11',
      6:'q11',
      7:'q11',
      8:'q11',
      9:'q11',
    },
    q11: {
      0:'q7',
      1:'q7',
      2:'q7',
      3:'q7',
      4:'q7',
      5:'q7',
      6:'q7',
      7:'q7',
      8:'q7',
      9:'q7',
    },
    q7: {
      "-":'q8',
    },
    q8: {
      A:'q9',
      B:'q9',
      C:'q9',
      D:'q9',
      E:'q9',
      F:'q9',
      G:'q9',
      H:'q9',
      I:'q9',
      J:'q9',
      K:'q9',
      L:'q9',
      M:'q9',
      N:'q9',
      Ñ:'q9',
      O:'q9',
      P:'q9',
      Q:'q9',
      R:'q9',
      S:'q9',
      T:'q9',
      U:'q9',
      V:'q9',
      W:'q9',
      X:'q9',
      Y:'q9',
      Z:'q9'
    },
  };

  const validarCadenaYMostrarResultado = () => {
    setResultados([]);
    let estadoActual = estado; // Mantener el estado actual

    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i].toUpperCase();

      if (transiciones[estadoActual] && transiciones[estadoActual][caracter]) {
        estadoActual = transiciones[estadoActual][caracter]; // Actualizar el estado
        const resultado = `${caracter} es válido, estado: ${estadoActual}`;
        setResultados((prevResultados) => [...prevResultados, resultado]);
      } else {
        const resultado = `${caracter} no es válido, estado: ${estadoActual}`;
        setResultados((prevResultados) => [...prevResultados, resultado]);
        break; // Detener la validación en caso de error
      }
    }

    setEstado(estadoActual); // Actualizar el estado final
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Validación de Cadenas</h1>
        <label className="block mb-2">Ingrese una cadena:</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          value={cadena}
          onChange={(e) => setCadena(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={validarCadenaYMostrarResultado}
        >
          Validar
        </button>
        <div className="mt-4">
          {resultados.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold">Resultados</h2>
              <ul>
                {resultados.map((resultado, index) => (
                  <li key={index}>{resultado}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
