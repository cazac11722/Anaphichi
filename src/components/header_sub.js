import { Link, useLocation } from "react-router-dom";

const HeaderSub = ({ stateItems, subMenuItems}) => {

    const location = useLocation();

    return (
        <div className="sub_title">
            <div className="sub_txt">
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

export default HeaderSub;
