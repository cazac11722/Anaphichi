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
import { model1, model2, model3, model4, model5 } from "./modelData";
import Programs from "../body/Programs";

const ModelPage = () => {
    const location = useLocation();

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: '모델', delay: 400 },
        { text: '모델수업', delay: 400 },
    ];

    const subMenuItems = [
        { text: '모델수업', link: '/class/model', delay: 450, content: model1 },
        { text: '시니어 모델', link: '/class/model/1', delay: 450, content: model2 },
        { text: '프로 모델', link: '/class/model/2', delay: 500, content: model3 },
        { text: '취미반', link: '/class/model/3', delay: 550, content: model4 },
        { text: '포토포즈반', link: '/class/model/4', delay: 550, content: model5 },
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

export default ModelPage;
