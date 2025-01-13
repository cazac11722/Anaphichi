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
import Programs from "../body/Programs";

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

export default HostPage;
