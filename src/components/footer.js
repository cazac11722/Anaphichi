const Footer = () => {
    return (
        <footer>
            <div className="footer_top">
                <div className="inner_wrap">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li></li>
                        <li>CUSTOMER CENTER · 053-270-2226~7</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="inner_wrap">
                <div className="footer_img"></div>
                <div className="footer_quick">
                    <ul>
                        <li><a href="" rel="modal:open">개인정보처리방침</a></li>
                        <li className="pc_only">
                            <a href="">학원소개 </a>
                        </li>
                    </ul>
                </div>
                <div className="footer_address">
                    <div className="footer_info">
                        <br />
                        <h1>
                            <img src={ require("../assets/image/logo/logo.png")} alt="" />
                        </h1>
                        <p>
                            사업자(법인)명 : (주)아나피치 | 사업자번호 : 261-81-26002 <br />
                            대표 : 최윤정 | 개인정보책임자 : 최윤정 <br />
                            주소 : 대구 중구 국채보상로 611 대구시티센터 4, 5층 <br />
                            학원명 : 아나피치 | 학원등록번호 : 제14520호
                            <br />
                        </p>
                        <div className="ftr-tel">
                            053-270-2226~7<br />
                            anapeech_md@naver.com
                        </div>
                        <h4>© (주)아나피치 All Rights Reserved</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;