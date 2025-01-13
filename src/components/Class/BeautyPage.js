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
import { beauty1, beauty2, beauty3, beauty4 } from "./beautyData";
import Programs from "../body/Programs";

const BeautyPage = () => {
    const location = useLocation();

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: '미인대회', delay: 400 },
        { text: '미인대회', delay: 400 },
    ];

    const subMenuItems = [
        { text: '미인대회', link: '/class/beauty', delay: 450, content: beauty1 },
        { text: '미스코리아', link: '/class/beauty/1', delay: 450, content: beauty2 },
        { text: '미인대회', link: '/class/beauty/2', delay: 500, content: beauty3 },
        { text: '지역홍보대사', link: '/class/beauty/3', delay: 550, content: beauty4 },
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


export default BeautyPage;
