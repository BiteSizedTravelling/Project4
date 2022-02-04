import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="upperNav">
            <div className="wrapper-Nav">
                <ul>
                    <li><Link to="/tripsList">My Trips</Link></li>
                </ul>
                <Link to="/" aria-label="Go to home page">
                    <span className="cookieI"><i className="fas fa-cookie-bite">
                    <span className="title">Bite-Sized Traveling</span></i></span></Link>
                
                <button aria-label="ThemeChanger" onClick={props.changeStateFunction} className={`themeClick${props.showbox ? " rotating" : " not"}`}>
                    <i className={`${props.showbox ? "fas fa-times" : "fas fa-bahai"}`}></i>
                </button>

            </div>
        </nav>
    );
};

export default NavBar;