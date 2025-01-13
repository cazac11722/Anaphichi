import { Link } from "react-router-dom";

const Curriculum = () => {
    return (
        <div className="curriculum">
            <div className="curriculum_list">
                <Link to={'/class/speech'} data-aos="zoom-in" data-aos-delay="300" className="aos-init aos-animate">
                    <img src={require("../../assets/image/Class/speech/main.png")} alt="" />
                    <div className="txt">
                        <h5>스피치 수업</h5>
                    </div>
                </Link>
                <Link to={'/class/host'} data-aos="zoom-in" data-aos-delay="600" className="aos-init aos-animate">
                    <img src={require("../../assets/image/Class/host/main.png")} alt="img" />
                    <div className="txt">
                        <h5>사회자 수업</h5>
                    </div>
                </Link>
                <Link to={'/class/model'} data-aos="zoom-in" data-aos-delay="700" className="aos-init aos-animate">
                    <img src={require("../../assets/image/Class/model/img12.jpeg")} alt="img" />
                    <div className="txt">
                        <h5>모델 수업</h5>
                    </div>
                </Link>
                <Link to={'/class/kids'} data-aos="zoom-in" data-aos-delay="400" className="aos-init aos-animate">
                    <img src={require("../../assets/image/Class/kids/main.jpg")} alt="" />
                    <div className="txt">
                        <h5>드림하이 키즈스쿨</h5>
                    </div>
                </Link>
                <Link to={'/class/beauty'} data-aos="zoom-in" data-aos-delay="500" className="aos-init aos-animate">
                    <img src={require("../../assets/image/Class/beauty/main.jpg")} alt="" />
                    <div className="txt">
                        <h5>미인대회</h5>
                    </div>
                </Link>
                <Link to={'/class/beauty'} data-aos="zoom-in" data-aos-delay="500" className="aos-init aos-animate">
                    <div className="wosdd">댄스 수업</div>
                    <div className="txt">
                        <h5>댄스</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Curriculum;