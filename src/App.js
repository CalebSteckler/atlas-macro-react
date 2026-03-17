import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <main className="container">
      <h1>Atlas Macro React</h1>
      <p>Basic Create React App setup with routing.</p>
      <p>
        Try the <Link to="/about">About</Link> page.
      </p>
    </main>
  )
}

function About() {
  return (
    <main className="container">
      <h1>About</h1>
      <p>This is a starter page you can replace.</p>
      <p>
        Back to <Link to="/">Home</Link>.
      </p>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

