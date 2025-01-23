import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "../../components/footer";
import Header from "../../components/header";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/image/word/A1.jpg";
import img2 from "../../assets/image/word/A2.jpg";
import img2_1 from "../../assets/image/word/A2_.jpg";
import img3 from "../../assets/image/word/B1.jpg";
import img4 from "../../assets/image/word/B2.jpg";
import img5 from "../../assets/image/word/C1.jpg";
import img5_1 from "../../assets/image/word/C1-.jpg";
import img6 from "../../assets/image/word/C2.jpg";
import img7 from "../../assets/image/word/web.jpg";
import img8 from "../../assets/image/word/wrk1.jpg";
import img9 from "../../assets/image/word/wrk2.jpg";
import img10 from "../../assets/image/word/wrk3.jpg";
import img11 from "../../assets/image/word/wrk4.jpg";

const FacilityPage = () => {
    const [activeFacility, setActiveFacility] = useState(null);

    const facilities = [
        { id: "A1", name: "A1 강의실", img: img1 },
        { id: "A2", name: "A2 강의실", img: img2, additionalImg: img2_1 },
        { id: "B1", name: "B1 강의실", img: img3 },
        { id: "B2", name: "B2 강의실", img: img4 },
        { id: "C1", name: "C1 세미나실", img: img5, additionalImg: img5_1 },
        { id: "C2", name: "C2 강의실", img: img6 },
        { id: "연기실", name: "연기실", img: img7 },
        { id: "워킹실", name: "워킹실", img: img8, additionalImg: img9 },
        { id: "메이크업실", name: "메이크업실", img: img10, additionalImg: img11 },
    ];

    const handleFacilityClick = (facility) => {
        setActiveFacility(facility);
    };

    const closePopup = () => {
        setActiveFacility(null);
    };
  

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 500,
        });
        document.body.classList.add('active');
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="sub_title">
                    <div className="sub_txt">
                        <ul className="state clearfix">
                            <li data-aos="zoom-in"><a href="/">HOME</a></li>
                            <li data-aos="zoom-in" data-aos-delay="400">ABOUT</li>
                            <li data-aos="zoom-in" data-aos-delay="500">FACILITY</li>
                        </ul>
                        <h3 data-aos="zoom-in" data-aos-delay="500">FACILITY</h3>
                    </div>
                </div>

                <ul className="trainer_list">
                    {facilities.map((facility, index) => (
                        <li
                            key={facility.id}
                            data-aos="zoom-in"
                            data-aos-delay={100 * (index + 1)}
                            onClick={() => handleFacilityClick(facility)}
                        >
                            <img src={facility.img} alt={facility.name} />
                            <div className="trainer_txt">
                                <h3>{facility.name}</h3>
                            </div>
                        </li>
                    ))}
                </ul>

                {activeFacility && (
                    <div className="cpv show">
                        <header className="cpv__header">
                            <div className="cpv__header__btn--title">
                                <div className="cpv_title-inner">{activeFacility.name}</div>
                            </div>
                            <div className="cpv__header__btn--info">
                                <button
                                    className="cpv__header__btn cpv__header__btn--close"
                                    onClick={closePopup}
                                >
                                    <svg
                                        className="cpv__icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                    >
                                        <g className="header_icon_closed_null">
                                            <path
                                                d="M4.5 4L20.5 20"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            ></path>
                                            <path
                                                d="M20.5 4L4.5 20"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </header>
                        <main>
                            <Swiper
                                className="swiper1"
                                modules={[Navigation, Pagination]}
                                loop={true}
                                pagination={{ clickable: true }}
                                navigation
                            >
                                <SwiperSlide>
                                    <img src={activeFacility.img} alt={activeFacility.name} />
                                </SwiperSlide>
                                {activeFacility.additionalImg && (
                                    <SwiperSlide>
                                        <img
                                            src={activeFacility.additionalImg}
                                            alt={activeFacility.name}
                                        />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </main>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default FacilityPage;
