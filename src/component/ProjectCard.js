import React from 'react'
import '../css/ProjectCard.css'

const profileImage = '/img/profile.png';

function ProjectCard({ title, category, period, skills, members, contribution, description, image }) {
  return (
    <div className='p_card'>
      <div className='p_card_i'>
        <img
          src={profileImage}
          alt="Profile"
          className="profile_img"
        />
        <div className='left'>
          <h3 className='pc_title'>{title}</h3>

          <div className='pc_info'>
            <p><span>기간</span>{period}</p>
            <p><span>참여 인원</span>{members}</p>
            <p><span>기여도</span>{contribution}</p>
            <p><span>사용한 툴</span>{skills}</p>
            {/* {category} */}
          </div>

          <div className="pc_nar">
            <h4>목표 및 설명</h4>
            {description.map((desc, index) => (
              <p key={index} className='descrip'>목표 및 설명{desc}</p>
            ))}
          </div>
        </div>
      </div>
      <figure className='project_img'>
        <img src={image} alt='project'></img>
      </figure>
    </div>
  )
}

export default ProjectCard
