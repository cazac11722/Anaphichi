import { useState, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from "aos";
import "aos/dist/aos.css";

const AffiliatedPage = () => {

    useEffect(() => {
        // Initialize AOS
        Aos.init({
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
                            <li data-aos="zoom-in" data-aos-delay="500">AFFILIATED</li>
                        </ul>
                        <h3 data-aos="zoom-in" data-aos-delay="500">AFFILIATED</h3>
                    </div>
                </div>
                <div className="trainer_view owd" >
                    <div className="inner">
                        <div id="V1_view" className="active">
                            <div className="txt ">
                                <div className="tit_wrap">
                                    <div>
                                        <span className="subject"> ANAPEECH</span>
                                        <p className="trainer_nm" style={{ fontSize: "3rem" }}>아나피치 제휴 업체</p>
                                    </div>
                                </div>
                                <section>
                                    <h5 className="line">FITNESS</h5>
                                    <Swiper
                                        className={'readmore'}
                                        slidesperviewloop={1}
                                        breakpoints={{
                                            300: {
                                                slidesPerView: 2.5,
                                            },
                                            640: {
                                                slidesPerView: 2.5,
                                            },
                                            840: {
                                                slidesPerView: 3,
                                            },
                                            1040: {
                                                slidesPerView: 4,
                                            },
                                            1440: {
                                                slidesPerView: 5,
                                            },
                                        }}
                                    >
                                        <SwiperSlide><img src={require("../../assets/image/wet/img2.jpeg")} height={"120px"} alt='' /></SwiperSlide>
                                        <SwiperSlide><img src={require("../../assets/image/wet/img12.jpeg")} height={"120px"} alt='' /></SwiperSlide>
                                        <SwiperSlide><img src={require("../../assets/image/wet/img13.png")} height={"180px"} alt='' /></SwiperSlide>
                                    </Swiper>
                                    <h5 className="line">BEAUTY</h5>
                                    <Swiper
                                        className={'readmore'}
                                        slidesperviewloop={1}
                                        breakpoints={{
                                            300: {
                                                slidesPerView: 2,
                                            },
                                            640: {
                                                slidesPerView: 2,
                                            },
                                            840: {
                                                slidesPerView: 3,
                                            },
                                            1040: {
                                                slidesPerView: 4,
                                            },
                                            1440: {
                                                slidesPerView: 5,
                                            },
                                        }}
                                    >
                                        <SwiperSlide><img src={require("../../assets/image/wet/img11.jpeg")} height={"200px"} alt='' /></SwiperSlide>
                                        <SwiperSlide><img src={require("../../assets/image/wet/img1.jpeg")} height={"200px"} alt='' /></SwiperSlide>
                                    </Swiper>
                                    <h5 className="line">SKIN CARE</h5>
                                    <Swiper
                                        className={'readmore'}
                                        slidesperviewloop={1}
                                        breakpoints={{
                                            300: {
                                                slidesPerView: 2.5,
                                            },
                                            640: {
                                                slidesPerView: 2.5,
                                            },
                                            840: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                            },
                                            1040: {
                                                slidesPerView: 4,
                                                spaceBetween: 20,
                                            },
                                            1440: {
                                                slidesPerView: 5,
                                                spaceBetween: 20,
                                            },
                                        }}
                                    >
                                        <SwiperSlide><img src={require("../../assets/image/wet/img5.png")} height={"120px"} alt='' /></SwiperSlide>
                                        <SwiperSlide><img src={require("../../assets/image/wet/img6.png")} height={"120px"} alt='' /></SwiperSlide>
                                        <SwiperSlide><img src={require("../../assets/image/wet/img7.png")} height={"120px"} alt='' /></SwiperSlide>
                                        <SwiperSlide><img src={require("../../assets/image/wet/img10.png")} height={"120px"} alt='' /></SwiperSlide>
                                        <SwiperSlide><img src={require("../../assets/image/wet/img3.jpeg")} height={"120px"} alt='' /></SwiperSlide>
                                    </Swiper>
                                    <h5 className="line">DANTAL</h5>
                                    <Swiper
                                        className={'readmore'}
                                        slidesperviewloop={1}
                                        breakpoints={{
                                            300: {
                                                slidesPerView: 2.5,
                                            },
                                            640: {
                                                slidesPerView: 2.5,
                                            },
                                            840: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                            },
                                            1040: {
                                                slidesPerView: 4,
                                                spaceBetween: 20,
                                            },
                                            1440: {
                                                slidesPerView: 5,
                                                spaceBetween: 20,
                                            },
                                        }}
                                    >
                                        <SwiperSlide><img src={require("../../assets/image/wet/img4.png")} height={"120px"} alt='' /></SwiperSlide>
                                        <SwiperSlide><img src={require("../../assets/image/wet/img9.png")} height={"120px"} alt='' /></SwiperSlide>
                                    </Swiper>
                                    <h5 className="line">FASHION</h5>
                                    <Swiper
                                        className={'readmore'}
                                        slidesperviewloop={1}
                                        breakpoints={{
                                            300: {
                                                slidesPerView: 2,
                                            },
                                            640: {
                                                slidesPerView: 2,
                                            },
                                            840: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                            },
                                            1040: {
                                                slidesPerView: 4,
                                                spaceBetween: 20,
                                            },
                                            1440: {
                                                slidesPerView: 5,
                                                spaceBetween: 20,
                                            },
                                        }}
                                    >
                                        <SwiperSlide><img src={require("../../assets/image/wet/img8.jpeg")} height={"80px"} alt='' /></SwiperSlide>
                                    </Swiper>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
            <Footer />
        </>
    );
};

export default AffiliatedPage;
