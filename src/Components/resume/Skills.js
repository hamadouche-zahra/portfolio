import React, { useState, useEffect } from 'react'
import { FaCode, FaServer, FaDatabase, FaTools, FaPalette } from 'react-icons/fa'
import { SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiPhp, SiLaravel, SiNodedotjs, SiExpress, SiMysql, SiMongodb } from 'react-icons/si'
import { DiJava } from "react-icons/di";

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    icon: FaCode,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', percentage: 90, icon: SiHtml5, color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', percentage: 85, icon: SiCss3, color: 'from-blue-500 to-blue-600' },
      { name: 'JavaScript', percentage: 80, icon: SiJavascript, color: 'from-yellow-400 to-yellow-500' },
      { name: 'TypeScript', percentage: 75, icon: SiTypescript, color: 'from-blue-600 to-blue-700' },
      { name: 'React', percentage: 85, icon: SiReact, color: 'from-cyan-400 to-cyan-500' },
      { name: 'TailwindCSS', percentage: 80, icon: SiTailwindcss, color: 'from-teal-400 to-teal-500' },
      { name: 'Bootstrap', percentage: 75, icon: SiBootstrap, color: 'from-purple-500 to-purple-600' },
      { name: 'React Native', percentage: 70, icon: SiReact, color: 'from-indigo-500 to-purple-500' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    icon: FaServer,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'PHP', percentage: 75, icon: SiPhp, color: 'from-indigo-500 to-purple-500' },
      { name: 'Laravel', percentage: 80, icon: SiLaravel, color: 'from-red-500 to-red-600' },
      { name: 'Node.js', percentage: 70, icon: SiNodedotjs, color: 'from-green-500 to-green-600' },
      { name: 'Express.js', percentage: 65, icon: SiExpress, color: 'from-gray-600 to-gray-700' },
      { name: 'MySQL', percentage: 80, icon: SiMysql, color: 'from-blue-600 to-blue-700' },
      { name: 'MongoDB', percentage: 65, icon: SiMongodb, color: 'from-green-600 to-green-700' },
      { name: 'Java', percentage: 60, icon: DiJava, color: 'from-orange-500 to-red-500' },

    ]
  }
]

const SkillCard = ({ skill, index, isVisible }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const IconComponent = skill.icon

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(skill.percentage)
      }, index * 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.percentage, index])

  const getSkillLevel = (percentage) => {
    if (percentage >= 80) return { label: 'Expert', color: 'text-emerald-400' }
    if (percentage >= 70) return { label: 'Avancé', color: 'text-blue-400' }
    if (percentage >= 60) return { label: 'Intermédiaire', color: 'text-yellow-400' }
    return { label: 'Débutant', color: 'text-orange-400' }
  }

  const skillLevel = getSkillLevel(skill.percentage)

  return (
    <div className='group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-designColor transition-all duration-500 transform hover:scale-105 hover:shadow-2xl'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-3'>
          <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className='text-2xl text-white' />
          </div>
          <div>
            <h4 className='text-lg font-semibold text-white group-hover:text-designColor transition-colors duration-300'>
              {skill.name}
            </h4>
            <span className={`text-xs font-medium ${skillLevel.color}`}>
              {skillLevel.label}
            </span>
          </div>
        </div>
        <div className='text-right'>
          <div className='text-2xl font-bold text-white group-hover:text-designColor transition-colors duration-300'>
            {animatedPercentage}%
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className='relative'>
        <div className='w-full h-3 bg-gray-700 rounded-full overflow-hidden'>
          <div 
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{ width: `${animatedPercentage}%` }}
          >
            <div className='absolute inset-0 bg-white opacity-20 animate-pulse'></div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div 
          className={`absolute top-0 h-3 bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out`}
          style={{ width: `${animatedPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const CategorySection = ({ category, isVisible }) => {
  const IconComponent = category.icon

  return (
    <div className='w-full'>
      <div className='mb-8'>
        <div className='flex items-center gap-4 mb-6'>
          <div className={`w-16 h-16 bg-gradient-to-r ${category.color} bg-opacity-20 rounded-full flex items-center justify-center`}>
            <IconComponent className='text-3xl text-white' />
          </div>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>
              {category.title}
            </h2>
            <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`}></div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {category.skills.map((skill, index) => (
          <SkillCard 
            key={skill.name}
            skill={skill}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getOverallStats = () => {
    const allSkills = [...skillCategories[0].skills, ...skillCategories[1].skills]
    const totalSkills = allSkills.length
    const averageLevel = Math.round(allSkills.reduce((sum, skill) => sum + skill.percentage, 0) / totalSkills)
    const expertSkills = allSkills.filter(skill => skill.percentage >= 80).length
    const advancedSkills = allSkills.filter(skill => skill.percentage >= 70 && skill.percentage < 80).length

    return { totalSkills, averageLevel, expertSkills, advancedSkills }
  }

  const stats = getOverallStats()

  return (
    <div className='w-full py-10'>
      {/* Navigation Tabs */}
      <div className="flex w-full justify-center mb-12">
  <div className="bg-gray-900 p-2 rounded-full border border-gray-700 shadow-md flex gap-2">
    {skillCategories.map((category) => {
      const IconComponent = category.icon
      const isActive = activeTab === category.id
      return (
        <button
          key={category.id}
          onClick={() => setActiveTab(category.id)}
          className={`
            relative flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 
            ${isActive 
              ? 'bg-gradient-to-r from-[#ff014f] to-pink-600 text-white shadow-lg shadow-pink-500/40 scale-105' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800'}
          `}
        >
          {/* Glow effect derrière l’onglet actif */}
          {isActive && (
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff014f] to-pink-600 opacity-30 blur-lg"></span>
          )}
          <IconComponent className="text-lg relative z-10" />
          <span className="hidden sm:inline relative z-10">{category.title}</span>
        </button>
      )
    })}
  </div>
</div>


      {/* Skills Content */}
      <div className='space-y-16'>
        {skillCategories.map((category) => (
          <div 
            key={category.id}
            className={`transition-all duration-500 ${
              activeTab === 'all' || activeTab === category.id 
                ? 'opacity-100 transform translate-y-0' 
                : activeTab !== category.id 
                ? 'hidden' 
                : 'opacity-100 transform translate-y-0'
            }`}
          >
            <CategorySection category={category} isVisible={isVisible} />
          </div>
        ))}
      </div>

      {/* Statistics Overview */}
      <div className='mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700'>
        <h3 className='text-2xl font-bold text-white mb-8 text-center'>Aperçu des Compétences</h3>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center group'>
            <div className='w-16 h-16 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
              <FaTools className='text-2xl text-designColor' />
            </div>
            <div className='text-3xl font-bold text-white mb-2'>{stats.totalSkills}</div>
            <div className='text-gray-400'>Technologies</div>
          </div>

          <div className='text-center group'>
            <div className='w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
              <FaPalette className='text-2xl text-green-500' />
            </div>
            <div className='text-3xl font-bold text-white mb-2'>{stats.averageLevel}%</div>
            <div className='text-gray-400'>Niveau Moyen</div>
          </div>

          <div className='text-center group'>
            <div className='w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
              <FaCode className='text-2xl text-blue-500' />
            </div>
            <div className='text-3xl font-bold text-white mb-2'>{stats.expertSkills}</div>
            <div className='text-gray-400'>Niveau Expert</div>
          </div>

          <div className='text-center group'>
            <div className='w-16 h-16 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
              <FaDatabase className='text-2xl text-purple-500' />
            </div>
            <div className='text-3xl font-bold text-white mb-2'>{stats.advancedSkills}</div>
            <div className='text-gray-400'>Niveau Avancé</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center mt-12'>
        <div className='bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700'>
          <p className='text-gray-300 mb-4'>
            Curieuse de voir ces compétences en action ?
          </p>
          <button className='px-8 py-3 bg-gradient-to-r from-designColor to-designColor hover:from-designColor hover:to-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'>
            Voir Mes Projets
          </button>
        </div>
      </div>
    </div>
  )
}

export default Skills