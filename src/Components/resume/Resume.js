import React ,{useState}from 'react'
import Title  from './../layouts/Title'
import Experience from './Experience';
import Education from './Education'
import Skills from './Skills';

function Resume() {
    const [educationData,seteducationData]=useState(true);
    const [skillData,setSkillData]=useState(false);
    const [experienceData,setExperienceData]=useState(false);

  return (
    <section id='resume'className='w-full py-20  border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center  '>
        <Title title="" des="Mon Parcours"/>
        </div>
        <div>
            <ul className='w-full  grid  grid-cols-1 md:grid-cols-3 '>
             <li onClick={()=>
                seteducationData(true)&
                setSkillData(false)&
                setExperienceData(false)

             } 
             className={`${ educationData? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>
             Éducation
             </li>
             <li onClick={()=>
                  seteducationData(false) &
                  setSkillData(true)&
                  setExperienceData(false)
                } 
             className={`${
                skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}>
              Compétences Techniques
             </li>
             <li onClick={()=>
                  seteducationData(false) &
                  setSkillData(false)&
                  setExperienceData(true)}
             className={`${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}>
             Experience 
             </li>
             

            </ul>
        </div>
        {educationData &&    <Education/> }
        {skillData && <Skills/> }
        {experienceData && <Experience/>}
   
    </section>
  )
}

export default Resume