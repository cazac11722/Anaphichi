import { useState, useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "../../assets/css/sub.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderSub from "../../components/header_sub";
import HeaderSubClass from "../header_sub_class";
import { useLocation } from "react-router-dom";
import { speech1, speech2, speech3, speech4, speech5, speech6, speech7 } from "./speechData";

const SpeechPage = () => {
    const location = useLocation();

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: '스피치', delay: 400 },
        { text: '스피치 클래스', delay: 400 },
    ];

    const subMenuItems = [
        {
            text: '스피치 클래스', link: '/class/speech', delay: 450, content: speech1},
        { text: '아나운서', link: '/class/speech/1', delay: 450, content: speech2},
        { text: '크리에이터·MC', link: '/class/speech/2', delay: 500,content: speech3 },
        { text: '취업·면접 컨설팅', link: '/class/speech/3', delay: 550, content: speech4},
        { text: '브리핑·PT컨설팅', link: '/class/speech/4', delay: 550, content: speech5},
        { text: '기초스피치', link: '/class/speech/5', delay: 550, content: speech6},
        { text: '스피치 강사 양성 교육', link: '/class/speech/6', delay: 550, content: speech7},
    ];

    const [currentProgram, setCurrentProgram] = useState(null); // Default to the first program

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
        document.body.classList.add('active');
    }, []);


    return (
        <>
            <Header />
            <main>
                <HeaderSubClass stateItems={stateItems} subMenuItems={subMenuItems} />
                <Programs location={location} subMenuItems={subMenuItems} />
            </main>
            <Footer />
        </>
    );
};

const Programs = ({ location, subMenuItems }) => {
    let view = subMenuItems.filter((e) => {
        return e.link == location.pathname ? true : false;
    })
    view = view[0];
    console.log(view);
    return (
        <div className="anapich">
            <div className="trainer_view">
                <div className="inner">
                    <div id="V1_view" className="active">
                        <div className="img" style={{ width: "60em"}}>
                            <Swiper
                                modules={[Autoplay]}
                                loop={true} // 무한 루프를 설정하여 첫 번째 슬라이드로 돌아가도록 함
                                slidesPerViewloop={1}
                                spaceBetweenloop={10}
                                autoplayloop={true}
                                className="partners-list"
                            >
                                <SwiperSlide><img src={require("../../assets/image/Class/speech/main.png")} alt='' /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="txt ">
                            <div className="tit_wrap">
                                <div>
                                    <span className="subject"> ClASS</span>
                                    <p className="trainer_nm" style={{ fontSize: "3rem" }}>{view.text}</p>
                                </div>
                            </div>
                            <section>
                                <h5 className="line">소개</h5>
                                <ul className="readmore">
                                    <li>
                                        <div dangerouslySetInnerHTML={{ __html: view.content.contents }} />
                                    </li>
                                </ul>
                                <h5 className={`line ${view.content.vie ? '' : 'hidden'}    `}>주요 혜택</h5>
                                <ul className={`readmore ${view.content.vie ? '' : 'hidden'}`} >
                                    <li>
                                        <div dangerouslySetInnerHTML={{ __html: view.content.vie }} />
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default SpeechPage;
