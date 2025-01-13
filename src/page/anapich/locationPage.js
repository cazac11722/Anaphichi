import { useEffect } from "react";
import AOS from "aos";
import "../../assets/css/sub.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderSub from "../../components/header_sub";

const LocatoinPage = () => {
    const stateItems = [
        { text: 'HOME', link: '/', delay: 0 },
        { text: 'ABOUT', delay: 400 },
    ];

    const subMenuItems = [
        { text: 'AP 소개', link: '/anapich', delay: 450 },
        { text: 'LOCATION', link: '/location', delay: 500 },
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
                <div className="anapich">
                    <div className="trainer_view">
                        <div className="inner">
                            <div id="V2_view" className="cide active">
                                <div className="img">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349.1974439546984!2d128.59725620417308!3d35.87113045858115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e313536d269f%3A0xd24d2d79900e857f!2z64yA6rWs7Iuc7Yuw7IS87YSw!5e1!3m2!1sko!2skr!4v1732205374310!5m2!1sko!2skr"
                                        height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <section>
                                    <h5 className="line">ADDRESS</h5>
                                    <ul className="readmore">
                                        <li>
                                            <p>대구 중구 국채보상로 611 대구시티센터 4, 5층</p>
                                        </li>
                                    </ul>
                                    <h5 className="line">CONTACT</h5>
                                    <ul className="readmore">
                                        <li>
                                            <p>T.053-270-2226 ~ 7</p>
                                        </li>
                                        <li>
                                            <a href="https://pf.kakao.com/_DGVPT/chat" target="_blank" className="kakao">카카오톡 상담
                                                <span>@아나피치</span></a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default LocatoinPage;