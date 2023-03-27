import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import GetAppIcon from '@material-ui/icons/GetApp';
import { green, red } from '@material-ui/core/colors';

function Experience() {
  return (
    <div className='experience'> 
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Georgia State University</h3>
          <h4 className='vertical-timeline-element-subtitle'>Atlanta, GA</h4>
          <p>Film/Cinema/Video Studies/Japanese Language</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          date='2016 - 2021'
          iconStyle={{background: '#ff8c00', color: '#fff'}}
          icon={<LibraryMusicIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Audio Engineer</h3>
          <h4 className='vertical-timeline-element-subtitle'>Freelance</h4>
          <p>
            As a freelance audio engineer, I utilized industry-standard tools such as ProTools, 
            Logic Pro X, and Waves plugins to produce high-quality audio for my clients.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          date='2021 - Present'
          iconStyle={{background: '#ff8c00', color: '#fff'}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Calendly</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Software Specialist (Atlanta, GA)
          </h4>
          <p>
            As a Software Specialist at Calendly, 
            I played a crucial role in ensuring our customers had a seamless scheduling 
            experience by utilizing various tools such as Zendesk, SuperAdmin, Twilio, and SendGrid. 
            This contributed to Calendly's success and recognition as one of Forbes America's Best Startup Employers 
            for two consecutive years.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2022 - 2023'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Georgia Institute of Technology</h3>
          <h4>Software Engineering Bootcamp Co-hort (Atlanta, GA)</h4>
          <p>
            As a software engineering student in Georgia Tech's Bootcamp, 
            I gained practical experience working with the MERN stack and collaborated on various projects, 
            developing my skills in full-stack development.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
        <div className='resume'>
          <h3>Download Resume Here</h3>
          <button><GetAppIcon fontSize='large' style={{color: 'white'}}/></button>
        </div>
    </div>
  )
}

export default Experience