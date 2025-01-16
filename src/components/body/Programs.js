
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
                                modules={[Navigation, Autoplay]} // Include Navigation module
                                loop={true} // Enable infinite loop
                                autoplay={{
                                    delay: 3000, // Auto-slide every 3 seconds
                                    disableOnInteraction: false, // Continue autoplay after user interaction
                                }}
                                spaceBetween={10} // Space between slides
                                slidesPerView={1} // Show 1 slide at a time
                                navigation // Enable navigation (arrows)
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
                                <h5 className={`line ${view.content.vie ? '' : 'hidden'}`}>주요 혜택</h5>
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