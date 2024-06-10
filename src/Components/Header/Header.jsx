import "./Header.scss"

import { NavLink } from "react-router-dom";
export const Header = () =>{
    return(
        <>
        <header className='header' id='header'>
			<div className="container">
				<nav className="header__nav">
					<NavLink to="/" className="header__link">Catalog</NavLink>
					<NavLink to="/Clients" className="header__link">Clients</NavLink>
				</nav>
			</div>
		</header>
        </>
    )
}
export default Header;