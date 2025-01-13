
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const Programs = ({ location, subMenuItems }) => {
    let view = subMenuItems.filter((e) => {
        return e.link == location.pathname ? true : false;
    })
    view = view[0];
    
    return (
        <div className="anapich">
            <div className="trainer_view">
                <div className="inner">
                    <div id="V1_view" className="active">
                        <div className="img" style={{ width: "40%" }}>
                            <Swiper
                                modules={[Autoplay]}
                                loop={true} // 무한 루프를 설정하여 첫 번째 슬라이드로 돌아가도록 함
                                slidesperviewloop={1}
                                spacebetweenloop={10}
                                className="partners-list"
                            >
                                {
                                    view.content.images.map((e, index) => (
                                        <SwiperSlide key={index}><img src={require(`../../assets/image/Class${e}`)} alt='' /></SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                        <div className="txt ">
                            <div className="tit_wrap">
                                <div>
                                    <span className="subject"> ClASS</span>
                                    <p className="trainer_nm" style={{ fontSize: "3rem" }}>{view.text}</p>
                                </div>
                            </div>
                            <section>
                                <h5 className="line">소개</h5>
                                <ul className="readmore">
                                    <li>
                                        <div dangerouslySetInnerHTML={{ __html: view.content.contents }} />
                                    </li>
                                </ul>
                                <h5 className={`line ${view.content.vie ? '' : 'hidden'}    `}>주요 혜택</h5>
                                <ul className={`readmore ${view.content.vie ? '' : 'hidden'}`} >
                                    <li>
                                        <div dangerouslySetInnerHTML={{ __html: view.content.vie }} />
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Programs;