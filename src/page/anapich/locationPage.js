/* global naver */
import { useEffect } from "react";
import AOS from "aos";
import "../../assets/css/sub.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderSub from "../../components/header_sub";

const LocatoinPage = () => {
    const stateItems = [
        { text: "HOME", link: "/", delay: 0 },
        { text: "ABOUT", delay: 400 },
    ];

    const subMenuItems = [
        { text: "AP 소개", link: "/anapich", delay: 450 },
        { text: "LOCATION", link: "/location", delay: 500 },
    ];

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
        document.body.classList.add("active");

        const script = document.createElement("script");
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tzwezty8ho&submodules=geocoder`;
        script.async = true;
        script.onload = () => {
            const map = new naver.maps.Map("map", {
                center: new naver.maps.LatLng(35.871130, 128.597256),
                zoom: 17,
            });

            const marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(35.871130, 128.597256),
                map: map,
                title: "대구 중구 국채보상로 611 대구시티센터 4, 5층",
            });

            const infoWindow = new naver.maps.InfoWindow({
                content: `<div style="padding:10px; font-size:14px;">대구 중구 국채보상로 611<br />대구시티센터 4, 5층</div>`,
            });

            naver.maps.Event.addListener(marker, "click", () => {
                infoWindow.open(map, marker);
            });
        };
        document.body.appendChild(script);
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
                                    <div
                                        id="map"
                                        style={{
                                            width: "100%",
                                            height: "600px",
                                            border: "1px solid #ddd",
                                        }}
                                    ></div>
                                </div>
                                <section>
                                    <h5 className="line">ADDRESS</h5>
                                    <ul className="readmore">
                                        <li>
                                            <p>대구 중구 국채보상로 611 대구시티센터 4, 5층</p>
                                            <p>-중앙로역 대구 1호선에서 도보 5분 거리</p>
                                            <p>-2.28기념중앙공원건너1 버스정류장 바로 앞</p>
                                        </li>
                                    </ul>
                                    <h5 className="line">CONTACT</h5>
                                    <ul className="readmore">
                                        <li>
                                            <p>T.053-270-2226 ~ 7</p>
                                        </li>
                                        <li>
                                            <a
                                                href="https://pf.kakao.com/_DGVPT/chat"
                                                target="_blank"
                                                className="kakao"
                                            >
                                                카카오톡 상담 <span>@아나피치</span>
                                            </a>
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
};

export default LocatoinPage;
