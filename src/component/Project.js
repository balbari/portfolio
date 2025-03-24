import React from 'react'
import ProjectCard from './ProjectCard'
import '../css/Project.css'

const projects = [
  {
    title: "Channel A 홈페이지 프로젝트",
    category: "Publishing",
    period: "2024.11.25 - 2024.12.12 ",
    members: "1명",
    contribution: "100%",
    skills: "html, css, js",
    description: [
      `클론코딩을 통해 웹사이트의 구조와 기능에 익숙해지는 것을 목표로 했습니다.

      원본 사이트를 클론하면서 발생하는 정보 누락 부분을 보완하고 사용자 경험을 최적화 하기 위해 몇 가지 부분 수정을 했습니다.
      
      이를 통해 본래 사이트와 유사한 사용자 경험을 제공하며 실용적인 코딩 실력을 쌓았습니다.`
    ],
    image: "./img/P1.png",
  },
  {
    title: "리액트 투두리스트 프로젝트",
    category: "Publishing",
    period: "2024.12.19 - 2024.01.20",
    members: "1명",
    contribution: "100%",
    skills: "React",
    description: [
      `리액트를 활용하여 투두리스트 웹 어플리케이션을 개발하는 것이 목표였습니다.

      기본적인 투두리스트 기능을 구현하는 것 외에도 사용자가 보다 효율적으로 작업을 관리할 수 있도록 여러가지 기능을 추가했습니다. 전체, 완료 미완료 표시, 삭제, 수정 기능을 추가했습니다.
      
      이 프로젝트는 리액트의 컴포넌트 구조와 상태관리를 이해하는데 큰 도움이 되었으며 실제 사용자 경험을 고려한 기능 추가를 통해 실용성을 높였습니다.`
    ],
    image: './img/P2.png',
  },
  {
    title: "날씨 어플 프로젝트",
    category: "Publishing",
    period: "2024.02.10 - 2024.02.27",
    members: "1명",
    contribution: "100%",
    skills: "React",
    description: [
      `API 기능을 활용하여 날씨 정보를 실시간으로 받아와 사용자에게 제공하는 것입니다.
      
      사용자가 현재 위치하거나 검색한 장소의 온도에 맞춰 낮은 온도는 파란색 높은 온도는 빨간색으로 시각적으로 구분하여 직관적으로 날씨를 이해할 수 있도록 구성했습니다.
      
      디자인은 깔끔한 인터페이스를 제공하며 3D아이콘을 사용해 시각적 매력을 더했습니다. 전체적으로 날씨 정보가 한눈에 들어오도록 구성하여 사용자가 손쉽게 정보를 확인할 수 있도록 했습니다.`
    ],
    image: './img/P3.png',
  }
]
const profileImage = './img/profile.png';

function Project() {
  return (
    <div className='p_contents' id='projects'>
      <div className='p_title'>
        <div className="p_container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile_image"
          />
          <h2>My Projects</h2>
        </div>
        {/* 추후 제작할 가능성 있음 */}
        {/* <div className='category'>
          <button>All</button>
          <button>Design</button>
          <button>Publishing</button>
        </div> */}
      </div>


      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </div>
  )
}

export default Project
