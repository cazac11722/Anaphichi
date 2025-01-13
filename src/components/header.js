import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div id="m_menu" className="deth-1">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="anapich.html">ABOUT</a></li>
                    <li><a href="class.html">CLASS</a></li>
                    <li><a href="trainer.html">TRAINER</a></li>
                    <li><a href="facility.html">FACILITY</a></li>
                    <li><a href="">AFFILIATED CONCERN</a></li>
                </ul>
                <button type="button" className="ham_btn">
                    <i className="far fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <header>
                <Link to={'/'} className="logo">
                    <img src={ require("../assets/image/logo/logo.png")} alt="" />
                </Link>
                <nav>
                    <ul id="menu" className="deth-1">
                        <li><Link to="/anapich">ABOUT</Link></li>
                        <li><Link to="/class">CLASS</Link></li>
                        <li><Link to="/trainer">TRAINER</Link></li>
                        <li><Link to="/facility">FACILITY</Link></li>
                        <li><Link to="/affiliated">AFFILIATED</Link></li>
                    </ul>
                </nav>
                <button type="button" className="ham_btn">
                    <i className="far fa-bars" aria-hidden="true"></i>
                </button>
            </header>
        </>
    );
}

export default Header;