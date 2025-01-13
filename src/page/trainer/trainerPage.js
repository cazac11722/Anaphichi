import { useState, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Aos from "aos";

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
                                    <img src={require("../../assets/image/trainer/img2.jpg")} alt={trainer.name} />
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
        image: "../../assets/image/trainer/img2.jpg",
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
        image: "../../assets/image/trainer/img3.jpg",
        sections: [
            { title: "분야", items: ["미디어 스피치 원장"] },
            { title: "학과", items: ["경북대학교 사회정책대학원 정치학"] },
        ],
    },
];

export default TrainerPage;
