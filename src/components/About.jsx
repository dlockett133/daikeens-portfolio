import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { portrait } from '../assets'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <div className='flex flex-wrap'>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a software engineer, I thrive in collaborative environments where creativity and teamwork are key.
        My experience in the Javascript coding language and the MERN stack has allowed me to create innovative applications 
        that are both user-friendly and aesthetically pleasing. 
        I also enjoy experimenting with Three.js to bring a unique visual experience to my projects.
        <br/>
        But my interests don't stop there. Outside of work, you can find me exploring new restaurants and cuisines, 
        challenging my friends at the arcade, and taking my dog for long walks.
        <br/>
        If you're looking for a teammate who is driven, collaborative, and always willing to learn, then I'm your person. Let's create something amazing together!
      </motion.p>

      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
        variants={fadeIn("left", "spring", 0.1, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <img src={portrait} alt='portrait' className='rounded-[20px]'/>
        </motion.div>
      </Tilt>
    </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")