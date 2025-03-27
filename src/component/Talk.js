import React, { useEffect, useState } from 'react'
import '../css/Talk.css'

function Talk() {
    const messages = [
        `안녕하세요 저는 여수연입니다🖐`,
        `사용자 경험을 최우선으로 트렌드와 디테일을 놓치지 않으며
        지속적으로 학습하고 연구합니다.
        변화하는 디자인 환경에 적응하고 책임감을 가지고 협업을 통해
        최상의 결과를 도출합니다.`,
        `저에 대해 더 궁금한 점이 있다면 아래 버튼을 눌러주세요`
    ];
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        if (currentMessage < messages.length - 1) {
            const timer = setTimeout(() => {
                setCurrentMessage((prev) => prev + 1);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [currentMessage])

    const handleDownload = (file) => {
        const link = document.createElement("a");
        link.href = `${process.env.PUBLIC_URL}/${file}`;
        link.download = file;
        link.click();
    };

    const profileImage = './img/profile.png';

    return (
        <div className="talkContainer">
            {messages.slice(0, currentMessage + 1).map((msg, index) => (
                <div key={index} className="chat">
                    <div className="profileContainer">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="profile"
                        />
                    </div>
                    <div className="messageContainer">
                        <div className="message">{msg}</div>
                    </div>
                </div>
            ))}

            {currentMessage === messages.length - 1 && (
                <div className="download">
                    <button onClick={() => handleDownload("person.pdf")}>
                        이력서 / 자기소개서 다운로드
                    </button>
                </div>
            )}
        </div>
    )
}

export default Talk
