import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-container">
        <label>All Products</label>
        <input className="search-bar" placeholder='Search for...' />
        <ul className="list">
          <li>
            <label>
              <input type="checkbox"/>
              Item 1
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox"/>
              Item 2
            </label>
          </li>
        </ul>        
      </div>

    </>
  )
}

export default App
