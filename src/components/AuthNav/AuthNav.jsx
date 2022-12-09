import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <p>
      Please <NavLink to="/register">Register</NavLink> or{' '}
      <NavLink to="/login">Log In</NavLink>
    </p>
  );
};
