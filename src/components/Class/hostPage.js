import { useState, useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "../../assets/css/sub.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderSubClass from "../header_sub_class";
import { useLocation } from "react-router-dom";
import { host1 } from "./hostData";

const HostPage = () => {
    const location = useLocation();

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: '사회자', delay: 400 },
        { text: '사회자 수업', delay: 400 },
    ];

    const subMenuItems = [
        { text: '예식전문 사회자 교육', link: '/class/host', delay: 450, content: host1},
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

export default HostPage;
