import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between">
      <Link to="/">
        <h1>Otto</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  )
}
export default Header