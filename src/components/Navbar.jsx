import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg';
import store from '../assets/images/store.svg';
const Navbar = () => {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <ul className='list-styled'>
          <li className='list-styled'>
            <img src={logo} alt='Apple' />
          </li>
          <li>
            <a className='link-styled'> Store </a>
          </li>
          <li>
            <a className='link-styled'> Mac </a>
          </li>
          <li>
            <a className='link-styled'> Ipad </a>
          </li>
          <li>
            <a className='link-styled'> Iphone </a>
          </li>
          <li>
            <a className='link-styled'> Watch </a>
          </li>
          <li>
            <a className='link-styled'> Airpods </a>
          </li>
          <li>
            <a className='link-styled'> Store </a>
          </li>
          <li>
            <a className='link-styled'> Tv & Home </a>
          </li>
          <li>
            <a className='link-styled'> Entertainment </a>
          </li>
          <li>
            <a className='link-styled'> Accesories </a>
          </li>
          <li>
            <a className='link-styled'> Support </a>
          </li>
          <li>
            <a className='link-styled'> Accesories </a>
          </li>
          <li>
            <a className='link-styled'> Accesories </a>
          </li>
          <li className='list-styled'>
            <img src={search} alt='search icon' />
          </li>
          <li className='list-styled'>
            <img src={store} alt='store icon' />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
