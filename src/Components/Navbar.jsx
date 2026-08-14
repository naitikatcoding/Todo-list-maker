import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar flex items-center">
      <div className="logo">
        <img src={logo} alt="Todo List maker logo" />
      </div>
      <span className='text-4xl font-sans font-bold' >Add a To-Do</span>
    </nav>
  )
}

export default Navbar
