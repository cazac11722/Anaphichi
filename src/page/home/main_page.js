import { useEffect } from 'react';
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Curriculum from '../../components/body/curriculum';

const MainPage = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 500,
        });

        // Scroll event listener to toggle 'active' class on body
        const handleScroll = () => {
            if (window.scrollY >= 1000) {
                document.body.classList.add('active');
            } else {
                document.body.classList.remove('active');
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <main>
                <section className="banner">
                    <img
                        src={"https://lias303.dothome.co.kr/img/videos.gif"}
                        alt="img"
                        width={100}
                        height={50}
                    />
                    <h1 data-aos="fade-up">ANAPEECH</h1>
                </section>

                {/* Curriculum Section */}
                <section className="curriculum">
                    <div className="title txtWh">
                        <p className="tit" data-aos="fade-up"><a href="/class.html">CLASS</a></p>
                        <div className="con">
                            <p data-aos="fade-up" data-aos-delay="100">저희 학원의 교육 프로그램은 <br /> 학생 개개인의 목표와 수준에 맞춘 </p>
                            <p data-aos="fade-up" data-aos-delay="200">
                                <span className='text-bold'>체계적이고 실용적</span>인 커리큘럼으로 구성되어,
                            </p>
                            <p data-aos="fade-up" data-aos-delay="300">
                                <span className='text-bold'>깊이 있는 이해와 실질적인 성장</span>을 이끌어내는
                                <br /> 것을 <span className='text-bold'>목표</span>로 합니다.
                            </p>
                        </div>
                    </div>

                    <Curriculum />
                </section>

                {/* Trainer Section */}
                <section className="trainer">
                    <div className="title txtWh">
                        <p className="tit" data-aos="fade-up"><a href="/academy/trainer.asp">TRAINER</a></p>
                        <div className="con">
                            <p data-aos="fade-up" data-aos-delay="100">저희 학원의 강사진들은 <br /> 각 분야의 전문성과 풍부한 경험을 바탕으로 </p>
                            <p data-aos="fade-up" data-aos-delay="200"> 학생 맞춤형 교육을 제공합니다. </p>
                        </div>
                    </div>
                    <ul className="list" style={{justifyContent: "start"}}>
                        <li data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">
                            <h3>최윤정 대표</h3>
                            <img src={require("../../assets/image/trainer/img2.jpg")} alt="img" />
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
                            <h3>안도현 원장</h3>
                            <img src={require("../../assets/image/trainer/img3.jpg")} alt="img" style={{ objectPosition: "0% 18%" }} />
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
                            <h3>박진서 모델 센터장</h3>
                            <img src={require("../../assets/image/trainer/img1.jpg")} alt="img" />
                        </li>
                    </ul>
                </section>

                {/* Facility Section */}
                <section className="facility">
                    <div className="title txtWh">
                        <p className="tit" data-aos="fade-up"><a href="/academy/trainer.asp">FACILITY</a></p>
                        <div className="con">
                            <p data-aos="fade-up" data-aos-delay="100">저희 학원의 시설은 학습과 훈련에 최적화된 최신 장비와 쾌적한 환경을 갖추고 있어,</p>
                            <p data-aos="fade-up" data-aos-delay="200">학생들이 집중하고 자유롭게 학습할 수 있도록 설계되어 있습니다.</p>
                        </div>

                    </div>

                    <div className='list'>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={30}
                            breakpoints={{
                                300: { slidesPerView: 1 },
                                540: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2.5 },
                            }}
                            className="swiper-container-facility"
                        >
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/A1.jpg")} alt="" />
                                <p>A1 강의실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/A2.jpg")} alt="" />
                                <p>A2 강의실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/A2_.jpg")} alt="" />
                                <p>A2 강의실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/B1.jpg")} alt="" />
                                <p>B1 강의실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/B2.jpg")} alt="" />
                                <p>B2 강의실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/C1-.jpg")} alt="" />
                                <p>C1 세미나실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/C1.jpg")} alt="" />
                                <p>C1 세미나실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/C2.jpg")} alt="" />
                                <p>C2 강의실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/web.jpg")} alt="" />
                                <p>연기실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/wrk1.jpg")} alt="" />
                                <p>워킹실</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/image/word/wrk2.jpg")} alt="" />
                                <p>워킹실</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </section>

                {/* Partners Section */}
                <section className="partners">
                    <div className="title txtWh">
                        <p className="tit aos-init aos-animate" data-aos="fade-up">제휴업체로고</p>
                    </div>
 
                    <Swiper
                        modules={[Autoplay]}
                        loop={true} // 무한 루프를 설정하여 첫 번째 슬라이드로 돌아가도록 함
                        slidesperviewloop={1}
                        spacebetweenloop={10}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            840: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1040: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide><img src={require("../../assets/image/wet/img1.jpeg")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img2.jpeg")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img3.jpeg")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img4.png")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img5.png")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img6.png")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img7.png")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img8.jpeg")} height={"70px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img9.png")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img10.png")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img11.jpeg")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img12.jpeg")} height={"120px"} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={require("../../assets/image/wet/img13.png")} height={"120px"} alt='' /></SwiperSlide>
                    </Swiper>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default MainPage;
