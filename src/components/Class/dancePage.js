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
import { dance1 } from "./danceData";
import Programs from "../body/Programs";

const DancePage = () => {
    const location = useLocation();

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: '댄스', delay: 400 },
        { text: '댄스 클래스', delay: 400 },
    ];

    const subMenuItems = [
        { text: '댄스 클래스', link: '/class/dance', delay: 450, content: dance1 },
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


export default DancePage;
