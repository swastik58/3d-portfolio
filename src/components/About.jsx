import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { Wrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20opx] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className='w-25 h-25 object-contain rounded-md' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'  
      >
        A 2022 B.Tech graduate currently working in Oracle as a Full Time Employee but is always open to learning different technologies.
        I have been working on ReactJS for quite sometime and love developing beautiful frontend websites.
        I have always loved playing cricket and always wanted to become a cricketer but unfortunately that did not happen.
        In my free time, I love playing games, listening to music and watching movies and series. Reading novels is also my hobby.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br /> <br />
      <motion.div variants={textVariant()}>
        <a href="https://drive.google.com/drive/folders/1vs5TZzgFMC28uOXth4_LVBDYtYRZE0tD?usp=share_link" target="_blank">
          <h3 className="text-[40px] hover:text-red-800">Click here to view my Résumé</h3>
        </a>
      </motion.div>

    </>
  )
}

export default Wrapper(About, "about")