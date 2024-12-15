import { useState } from 'react'
import './App.css'

function App() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('Sin respuesta')

  const sendQuestion = async () => {
    const response = await fetch('http://167.71.26.102:3344/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "text":question }),
    })
    const data = await response.json()
    console.log(data)
    setResponse(data.response)
  }

  return (
    <div className="container">
      <h1>Realiza tus preguntas al docente y quedarán almacenadas en una base de datos</h1>
      <label htmlFor='question'>Pregunta:</label>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={5}
        cols={50}
      />
      <button onClick={sendQuestion}>Enviar pregunta</button>
      <h2>Respuesta del docente:</h2>
      <p>{response}</p>
    </div>
  )
}

export default App
