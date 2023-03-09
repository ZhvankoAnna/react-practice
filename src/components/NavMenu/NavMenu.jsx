import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.scss'

const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
};

export default NavMenu;
