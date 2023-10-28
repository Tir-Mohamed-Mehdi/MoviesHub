import { NavLink } from 'react-router-dom';
import './header.style.scss';

const HeaderComponent = () => {
  return (
    <header className="app-header">
      <img
        className="app-header-logo"
        src="/public/full-logo.svg"
        alt="the app logo"
      />

      <div className="app-links-container">
        <NavLink
          to="/movies"
          className="app-link"
        >
          Movies
        </NavLink>

        <NavLink
          to="series"
          className="app-link"
        >
          Series
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderComponent;
