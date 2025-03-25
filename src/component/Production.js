import React from 'react'
import '../css/Production.css'

function Production() {
    return (
        <div className='r_production'>
            <div className='title'>
                <h2>여수연 / 웹디자이너</h2>
                <p>디자인을 통해 문제를 해결하는 <span>웹디자이너 여수연</span>입니다</p>
            </div>
            <div className='info'>
                <div className='personal'>
                    <h3>Personal Info</h3>
                    <div className='p_birth'>
                        <p>생년월일</p>
                        <p>2000.03.27</p>
                    </div>
                    <div className='p_number'>
                        <p>전화번호</p>
                        <p>010.7522.6961</p>
                    </div>
                    <div className='p_mail'>
                        <p>이메일</p>
                        <p>anstjswk50@naver.com</p>
                    </div>
                </div>
                <div className='edu'>
                    <h3>Education</h3>
                    <div className='e_high'>
                        <p>성서고등학교 졸업 (2019.02)</p>
                    </div>
                    <div className='e_coll'>
                        <p>대구가톨릭대학교 디지털디자인과 졸업 (2023.08)</p>
                        <p>대구가톨릭대학교 복수전공 예술경영전공 졸업 (2023.08)</p>
                    </div>
                    <div className='e_study'>
                        <p>(산대특)AI&React활용 스마트시티웨더 구축<br/>리퍼블리셔 양성 (2025.03)</p>
                    </div>
                </div>
            </div>
            <div className='skills'>
                <h3>Tool skills</h3>
                <div className='high'>
                    <p>잘 다룰 수 있는</p>
                    <ul>
                        <li>#HTML</li>
                        <li>#CSS</li>
                        <li>#Photoshop</li>
                        <li>#Illustrator</li>
                    </ul>
                </div>
                <div className='medium'>
                    <p>어느 정도 다룰 수 있는</p>
                    <ul>
                        <li>#JS</li>
                        <li>#React</li>
                        <li>#Figma</li>
                        <li>#PPT</li>
                        <li>#Word</li>
                    </ul>
                </div>
                <div className='low'>
                    <p>미숙하지만 다룰 수 있는</p>
                    <ul>
                        <li>#Indesign</li>
                        <li>#Xd</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Production
