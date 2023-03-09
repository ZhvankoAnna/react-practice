import { NavLink } from 'react-router-dom';
import NavMenu from 'components/NavMenu/NavMenu';
import styles from './nav-bar.module.scss'

const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <NavLink to="/">Logo</NavLink>
      <NavMenu />
    </header>
  );
};

export default NavBar;
