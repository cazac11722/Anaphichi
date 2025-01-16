import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
    const handleMenuToggle = () => {
        document.body.classList.toggle("not_scroll");
        document.querySelector(".ham_btn").classList.toggle("open");
        document.querySelector("nav").classList.toggle("open");
    };

    const show = () => {
        document.body.classList.remove("not_scroll");
        document.querySelector(".ham_btn").classList.remove("open");
        document.querySelector("nav").classList.remove("open");
    }

    return (
        <>
            <div id="m_menu" className="deth-1">
                <ul>
                    <li><Link onClick={show} to="/">HOME</Link></li>
                    <li><Link onClick={show} to="/anapich">ABOUT</Link></li>
                    <li><Link onClick={show} to="/class">CLASS</Link></li>
                    <li><Link onClick={show} to="/trainer">TRAINER</Link></li>
                    <li><Link onClick={show} to="/facility">FACILITY</Link></li>
                    <li><Link onClick={show} to="/affiliated">AFFILIATED</Link></li>
                </ul>
                <button type="button" className="ham_btn" onClick={handleMenuToggle}>
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
                <button type="button" className="ham_btn" onClick={handleMenuToggle}>
                    <i className="far fa-bars" aria-hidden="true"></i>
                </button>
            </header>
        </>
    );
};

export default Header;
