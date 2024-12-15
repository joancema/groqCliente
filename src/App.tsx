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
      <p className='parrafo'>Realiza tus preguntas al docente y quedarán almacenadas en una base de datos</p>
      <label htmlFor='question'>Pregunta:</label>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={3}
        cols={40}
      />
      <button onClick={sendQuestion}>Enviar pregunta</button>
      <p className='parrafo'>Respuesta del docente:</p>
      <p className='respuesta'>{response}</p>
    </div>
  )
}

export default App
