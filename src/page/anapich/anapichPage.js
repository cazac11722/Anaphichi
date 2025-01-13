import { useEffect, useState } from "react";
import AOS from "aos";
import "../../assets/css/sub.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderSub from "../../components/header_sub";

const AnapichPage = () => {

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: 'ABOUT', delay: 400 },
    ];

    const subMenuItems = [
        { text: 'AP 소개', link: '/anapich', delay: 450 },
        { text: 'LOCATION', link: '/location', delay: 500 },
    ];
    const [currentProgram, setCurrentProgram] = useState(0);

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
                <HeaderSub stateItems={stateItems} subMenuItems={subMenuItems} currentProgram={currentProgram} />
                <div className="anapich">
                    <div className="trainer_view">
                        <div className="inner">
                            <div id="V1_view" className="active">
                                <div className="img"><img src={require("../../assets/image/logo/logo_in.png")} alt="img" /></div>
                                <div className="txt ">
                                    <div className="tit_wrap">
                                        <div>
                                            <span className="subject"> ANAPEECH</span>
                                            <p className="trainer_nm" style={{ fontSize: "3rem" }}>대구의 최고 최대 규모 아카데미</p>
                                        </div>
                                    </div>
                                    <section>
                                        <h5 className="line">소개</h5>
                                        <ul className="readmore">
                                            <li>
                                                <span>(주)AP는</span> 전문 인재 양성 교육 기관으로 방송, 연기, 모델, 각종 행사
                                                진행과 <br /> 스피치 등 다양한 분야의 인재를 발굴하고 육성하고 있습니다.<br />
                                                <br />
                                                각 분야의 최고 전문가로 성장할 수 있는 체계적인 교육 시스템과 <br />
                                                전문가들이 직접 참여하는 커리큘럼을 통해 한층 더 심도 있고 알찬 양질의 교육 서비스를 제공합니다.<br />
                                                <br />
                                                2000년대 초 문을 연 ㈜AP는 수많은 교육생들과 함께 성장해 왔습니다.<br />
                                                <br />
                                                각 분야에서 실력과 경험을 갖춘 전문 강사진을 바탕으로, <br />
                                                개인의 역량을 최대한 이끌어내는 맞춤형 교육을 제공함으로써 현재 전국 유수의 방송사와 <br />
                                                기관 등에서 활동하는 아나운서와 모델, 연기자, 사회자 등을 배출해 왔습니다.<br />
                                                <br />
                                                <span>㈜AP는 항상 이론과 실습</span> 실무 중심의 교육을 <br />
                                                바탕으로 현업에 즉시 투입될 수 있도록 역량 있는 인재 양성을<br />
                                                목표로 교육생의 꿈이 본원의 꿈이라 여기며 끊임없는 지원과 지지를 해 오고 있습니다.<br />
                                                <br />
                                                앞으로도 <span>㈜AP</span>는 우리는 여러분의 열정과 꿈을 실현할 수 있도록, 항상 발전하는 교육 기관이 될
                                                것을 약속드립니다.
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}



export default AnapichPage;