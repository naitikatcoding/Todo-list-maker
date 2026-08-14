import Particles from './Components/background.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  return (

    <div className="app-shell">
      <Particles className="background-canvas" />
      <main className="content">
        <Navbar/>
      </main>
    </div>
  )
}

export default App
