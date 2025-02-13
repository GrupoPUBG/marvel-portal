import { NavLink } from 'react-router-dom';
import './styles.scss';

export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" href="#" to="/">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo" />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/Characters">
            Characters
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/Comics">
            Comics
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/Creators">
            Creators
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/Events">
            Events
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/Series">
            Series
          </NavLink>
        </div>
      </div>

      <div className="mvl-navbar--right"></div>
    </nav>
  );
}
