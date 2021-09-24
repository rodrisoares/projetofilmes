
import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <header>
      <Link className="logo" to="/" >Filmelândia</Link>
      <Link className="favoritos" to="/favoritos" >Filmes salvos</Link>
    </header>
  )
}