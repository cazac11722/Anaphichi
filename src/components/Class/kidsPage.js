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
import { kids1, kids2, kids3, kids4 } from "./kidsData";
import Programs from "../body/Programs";

const KidsPage = () => {
    const location = useLocation();

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: '드림하이키즈스쿨', delay: 400 },
        { text: '키즈 모델', delay: 400 },
    ];

    const subMenuItems = [
        { text: '키즈 모델', link: '/class/kids', delay: 450, content: kids1 },
        { text: '키즈 댄스', link: '/class/kids/1', delay: 450, content: kids2 },
        { text: '키즈 모델', link: '/class/kids/2', delay: 500, content: kids3 },
        { text: '키즈 스피치', link: '/class/kids/3', delay: 550, content: kids4 },
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

export default KidsPage;
