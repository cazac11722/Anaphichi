import { useState, useEffect } from "react";
import AOS from "aos";

import "../../assets/css/sub.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderSub from "../../components/header_sub";
import HeaderSubClass from "../header_sub_class";
import { useLocation } from "react-router-dom";
import { speech1, speech2, speech3, speech4, speech5, speech6, speech7 } from "./speechData";
import Programs from "../body/Programs";

const SpeechPage = () => {
    const location = useLocation();

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: '스피치', delay: 400 },
        { text: '스피치 클래스', delay: 400 },
    ];

    const subMenuItems = [
        {
            text: '스피치 클래스', link: '/class/speech', delay: 450, content: speech1
        },
        { text: '아나운서', link: '/class/speech/1', delay: 450, content: speech2 },
        { text: '크리에이터·MC', link: '/class/speech/2', delay: 500, content: speech3 },
        { text: '취업·면접 컨설팅', link: '/class/speech/3', delay: 550, content: speech4 },
        { text: '브리핑·PT컨설팅', link: '/class/speech/4', delay: 550, content: speech5 },
        { text: '기초스피치', link: '/class/speech/5', delay: 550, content: speech6 },
        { text: '스피치 강사 양성 교육', link: '/class/speech/6', delay: 550, content: speech7 },
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


export default SpeechPage;
