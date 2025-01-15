import { useState } from 'react'
import './App.css'
import FetchGetRequestMW from './FetchGetRequestMW'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>greter</h1>
      <FetchGetRequestMW />
      <h2>-------------------</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
