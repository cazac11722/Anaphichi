import { Link, useLocation } from "react-router-dom";

const HeaderSubClass = ({ stateItems, subMenuItems }) => {

    const location = useLocation();

    return (
        <div className="sub_title">
            <div className="sub_txt">
                <Link to={"/class"} className="btn-prev aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM32 7L1 7V9L32 9V7Z" fill="white"></path>
                    </svg>
                </Link>
                <ul className="state clearfix">
                    {stateItems.map((item, index) => (
                        <li key={index} data-aos="zoom-in" data-aos-delay={item.delay || 0}>
                            <Link to={item.link}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <h3 data-aos="zoom-in" data-aos-delay="400">{stateItems[stateItems.length - 1].text}</h3>
            </div>
            <ul className="sub_menu">
                {subMenuItems.map((item, index) => (
                    <li
                        key={index}
                        data-view={item.view}
                        data-id={index}
                        className={item.link == location.pathname ? "aos-init aos-animate active" : 'aos-init aos-animate'}
                        data-aos="zoom-in"
                        data-aos-delay={item.delay || 0}
                    >
                        <Link to={item.link}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderSubClass;
