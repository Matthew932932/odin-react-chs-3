import { useState } from 'react'
import './App.css'
import ButtonMw from './Button/Button.jsx'
import ButtonComp from './Button/ButtonComp.jsx'
import StyledButton from './components/StyledButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Styled button</h2>
      <StyledButton href="...">Default Button</StyledButton>
      <StyledButton primary href="#">Primary Button</StyledButton>
      <h2>-------------------</h2>
      <h2>Button Module with Composition</h2>
      <ButtonComp />
      <ButtonComp type='secondary' />
      <h2>-------------------</h2>
      <h2>Button Module</h2>
      <ButtonMw />
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
