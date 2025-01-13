import { useState, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Aos from "aos";
import img1 from "../../assets/image/trainer/img1.jpg";
import img2 from "../../assets/image/trainer/img2.jpg";
import img3 from "../../assets/image/trainer/img3.jpg";
import img4 from "../../assets/image/trainer/img4.jpg";

const TrainerPage = () => {
    const [activeTrainer, setActiveTrainer] = useState("V1_view"); // Default active trainer
    const [expandedTrainer, setExpandedTrainer] = useState(null); // Track which trainer's details are expanded

    useEffect(() => {
        // Initialize AOS
        Aos.init({
            duration: 500,
        });
        document.body.classList.add('active');
    }, []);

    const handleTrainerClick = (viewId) => {
        setActiveTrainer(viewId); // Update the active trainer view
    };

    const toggleDetails = (trainerId) => {
        setExpandedTrainer(expandedTrainer === trainerId ? null : trainerId); // Toggle expand/collapse for the trainer
    };

    return (
        <>
            <Header />
            <main>
                <div className="sub_title">
                    <div className="sub_txt">
                        <ul className="state clearfix">
                            <li data-aos="zoom-in"><a href="/">HOME</a></li>
                            <li data-aos="zoom-in" data-aos-delay="400">ABOUT</li>
                            <li data-aos="zoom-in" data-aos-delay="500">TRAINER</li>
                        </ul>
                        <h3 data-aos="zoom-in" data-aos-delay="500">TRAINER</h3>
                    </div>
                    <ul className="sub_menu">
                        {["V1_view", "V2_view", "V3_view", "V4_view"].map((view, index) => (
                            <li
                                key={view}
                                className={activeTrainer === view ? "active" : ""}
                                onClick={() => handleTrainerClick(view)}
                            >
                                {view === "V1_view" && "최윤정 대표"}
                                {view === "V2_view" && "안도현 원장"}
                                {view === "V3_view" && "이상혁 원장"}
                                {view === "V4_view" && "박진서 센터장"}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="trainer_view">
                    <div className="inner">
                        {trainers.map((trainer) => (
                            <div
                                key={trainer.id}
                                id={trainer.id}
                                className={activeTrainer === trainer.id ? "active" : ""}
                            >
                                <div className="img">
                                    <img src={trainer.image} alt={trainer.name} />
                                </div>
                                <div className={`txt ${expandedTrainer === trainer.id ? "" : "hide"}`}>
                                    <div className="tit_wrap">
                                        <div>
                                            <span className="subject">Trainer</span>
                                            <p className="trainer_nm">{trainer.name}</p>
                                            <p className="trainer_nm_ko">{trainer.koreanName}</p>
                                        </div>
                                    </div>
                                    <section>
                                        {trainer.sections.map((section, index) => (
                                            <div key={index}>
                                                <h5 className="line">{section.title}</h5>
                                                <ul className="readmore">
                                                    {section.items.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </section>
                                    <div className="r_more_box">
                                        {expandedTrainer !== trainer.id ? (
                                            <button
                                                onClick={() => toggleDetails(trainer.id)}
                                                className="trainer_view_more r_more"
                                            >
                                                자세히 보기 <i className="fas fa-plus" aria-hidden="true"></i>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => toggleDetails(trainer.id)}
                                                className="trainer_view_fold r_more"
                                            >
                                                접기 <i className="fas fa-minus" aria-hidden="true"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

const trainers = [
    {
        id: "V1_view",
        name: "CHOI YUN JEONG",
        koreanName: "최윤정",
        image: img2,
        sections: [
            { title: "분야", items: ["㈜ 아나피치 대표"] },
            { title: "학과", items: ["경북대학교 경영학 석사"] },
            {
                title: "트레이닝",
                items: [
                    "TBC CEO 스피치 포럼 원장",
                    "대구경북권역 대학원격교육지원센터 위원",
                    "경북대학교 의과대학 외래교수",
                    "인플루언서 크리에이터협회 이사",
                ],
            },
        ],
    },
    {
        id: "V2_view",
        name: "AHN DO HYUN",
        koreanName: "안도현",
        image: img3,
        sections: [
            { title: "분야", items: ["미디어 스피치 원장"] },
            { title: "학과", items: ["경북대학교 사회정책대학원 정치학"] },
            { title: "경력", items: [
                "2024방송영남일보TV 언박싱",
                "2024진행제11회 낙동강평화축제",
                "2023방송CMB 대구방송 - 요즘애들",
                "2023방송안동MBC 라디오 라디엔티어링",
                "2023~2024진행미스그린코리아 대구경북",
                "대구 시정뉴스 2023파워풀대구",
                "대구MBC 지역사랑 캠페인",
                "TBC 우리동네 치안플러스 경북자치경찰 캠페인",
                "경북도청 공무원 스피치멘토",
                "대구 신세계백화점 쇼핑 라이브",
            ]},
        ],
    },
    {
        id: "V3_view",
        name: "LEE SANG HYUCK",
        koreanName: "이상혁",
        image: img4,
        sections: [
            { title: "분야", items: ["모델 원장"] },
            { title: "학과", items: ["중앙대학교 일반대학원 패션학과 석사"] },
            { title: "경력", items: [
                "2023 SBS 슈퍼모델",
                "AP 모델교육총괄 원장",
                "KAC 한국예술원 겸임 교수",
                "K-MASTERCLASS 온라인 콘텐츠 제작 본부장",
                "EMA Agency 워킹 강사",
                "'서울패션위크' 런웨이 모델",
                "홍콩 'KFC' CF 모델",
                "디자이너 브랜드 'Inspire HK' 앰버서더",
            ] },
        ],
    },
    {
        id: "V4_view",
        name: "PARK JIN SEO",
        koreanName: "박진서",
        image: img1,
        sections: [
            { title: "분야", items: ["모델 센터장"] },
            { title: "모델 활동", items: ["서울컬렉션 , 대구컬렉션, 부산 프레타포르테, TV홈쇼핑 전속모델등 패션쇼 500회이상", "광고 및 화보촬영 100회 이상 다수"] },
            { title: "경력", items: [
                "현) ㈜아나피치 예술문화센터장",
                "현) Kplus 부산지사 워킹강사",
                "현) 라온시니어모델 특강강사",
                "전) 세계문화예술진흥회 워킹강사",
                "전) 아시아모델협회 부산 워킹강사",
                "전) 한국연예사관학교 모델과 외래교수",
                "에어부산 신입승무원 워킹교육",
                "대구남구청&영남이공대 시니어모델 양성과정 메인강사",
                "한국이미지경영교육협회 전임강사",
            ] },
        ],
    },
];

export default TrainerPage;
