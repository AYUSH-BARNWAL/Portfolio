import React from 'react'
import {motion} from 'framer-motion'

const Skill =({name,x,y})=>{
    return(
        <motion.div className='flex aspect-square items-center justify-center text-lg rounded-full font-semibold bg-dark dark:bg-light dark:text-dark
             text-light p-4 shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200 absolute
             lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 md:-scale-75 xs:bg-transparent xs:dark:bg-transparent
             xs:text-dark xs:dark:text-light xs:font-bold sm:scale-50'
             whileHover={{scale:1.05}} viewport={{once:false}}
             initial={{x:0,y:0}} whileInView={{x:x,y:y,transition:{duration:2}}}>
                {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <div className='overflow-hidden'>
        <h2 className='font-bold text-8xl mt-52 md:text-6xl sm:5xl md:mt-16 sm:mt-12 lg:text-7xl w-full text-center dark:text-light'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark 
        lg:h-[80vh] sm:h-[60vh] xs:h-1/2 lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightMd sm:dark:bg-circularDarkSm'>
            <motion.div className='flex aspect-square items-center justify-center text-lg rounded-full font-semibold bg-dark
             text-light dark:text-dark dark:bg-light p-4 shadow-2xl hover:scale-105 cursor-pointer transition-all duration-200
             lg:p-6 md:p-4 xs:text-xs xs:p-2'>
                Web
            </motion.div>

            <Skill name='CSS'x='-0vw' y='-7vw'/>
            <Skill name='HTML' x='-19vw' y='2vw'/>
            <Skill name='JavaScript' x='22vw' y='6vw'/>
            <Skill name='ReactJS' x='0vw' y='12vw'/>
            <Skill name='NextJS' x='-20vw' y='17vw'/>
            <Skill name='Web Design' x='32vw' y='-5vw'/>
            <Skill name='Firebase' x='-28vw' y='19vw'/>
            <Skill name='Tailwind CSS' x='18vw' y='18vw'/>

        </div>
    </div>
  )
}

export default Skills