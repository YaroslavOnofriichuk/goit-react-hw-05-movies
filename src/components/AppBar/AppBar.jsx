import { NavLink } from 'react-router-dom';
import { Nav } from "./AppBar.Syled";

export const AppBar = () => {
    return (
        <Nav>
          <NavLink to="" activeclassname="active">Home</NavLink>
          <NavLink to="movies" activeclassname="active">Movies</NavLink>
        </Nav>
    );
};