import React, { useState } from 'react';

function App() {
  const [cadena, setCadena] = useState('');
  const [resultados, setResultados] = useState([]);

  const validarCadena = (cadena) => {
    const patron = /^((A[G-Z][A-Z])|(B[A-Z]+[A-Z])|(C[A-Y][A-Z]))-(?!000)[0-9]{3}-[A-ZA-Z]$/;
    return patron.test(cadena);
  };

  const validarCadenaYMostrarResultado = () => {
    setResultados([]);

    if (validarCadena(cadena)) {
      for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];

        let resultado = '';

        if (caracter.toLowerCase() === 'salir') {
          window.close();
          return;
        }

        if (i < 3 && /[A-Z]/.test(caracter)) {
          resultado = `${caracter} es válido (letra)`;
        } else if (i >= 4 && i <= 6 && /[0-9]/.test(caracter)) {
          resultado = `${caracter} es válido (número)`;
        } else if ((i === 3 || i === 7) && caracter === '-') {
          resultado = `${caracter} es válido (guión)`;
        } else if (i === 8 && /[A-Z]/i.test(caracter)) {
          resultado = `${caracter} es válido (letra)`;
        } else {
          resultado = `${caracter} no es válido`;
        }

        setResultados((prevResultados) => [...prevResultados, resultado]);
      }
    } else {
      setResultados(['Cadena no válida']);
    }
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
