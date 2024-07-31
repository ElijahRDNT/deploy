import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
    </div>
  )
}

export default App
