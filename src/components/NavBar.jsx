import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/players">Players</Link>
    </nav>
  );
}

export default NavBar;
