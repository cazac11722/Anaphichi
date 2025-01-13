import { useEffect } from "react";
import AOS from "aos";
import "../../assets/css/sub.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderSub from "../../components/header_sub";
import Curriculum from "../../components/body/curriculum";

const ClassPage = () => {

    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: 'CLASS', delay: 400 },
    ];

    const subMenuItems = [
    ];

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
                <HeaderSub stateItems={stateItems} subMenuItems={subMenuItems} />
                <Curriculum />
            </main>
            <Footer />
        </>
    );
}

export default ClassPage;