import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity, FaAward, FaCalendarAlt } from 'react-icons/fa'
import { MdSchool, MdLocationOn } from 'react-icons/md'

function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Master 2 en Ingénierie Logicielle",
      institution: "Université des Sciences et de la Technologie Houari Boumediène (USTHB)",
      location: "Alger, Algérie",
      period: "2020 - 2022",
      grade: "Bien",
      description: "Objectif : acquérir des compétences en ingénierie des logiciels permettant d'intégrer le monde professionnel pour la conception, le développement et l'assurance qualité des systèmes logiciels.",
      icon: FaGraduationCap,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      degree: "Licence en Ingénierie des Systèmes d'Information et des Logiciels",
      institution: "Université des Sciences et de la Technologie Houari Boumediène (USTHB)",
      location: "Alger, Algérie",
      period: "2016 - 2020",
      grade: "Assez Bien",
      description: "Objectif : maîtriser les compétences disciplinaires en ingénierie des logiciels et des systèmes d'information pour être opérationnel dans le milieu professionnel, comprendre les fonctions et objectifs de l'entreprise, et coopérer efficacement.",
      icon: MdSchool,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      degree: "Baccalauréat Sciences Expérimentales",
      institution: "Lycée Bouchrour Kaddour",
      location: "Chlef, Algérie",
      period: "2013 - 2016",
      grade: "Bien",
      description: "",
      icon: MdSchool,
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full py-6 sm:py-10 px-4 sm:px-6 lg:px-0'
    >
      {/* Section Diplômes */}
      <div className='mb-12 sm:mb-16'>
        {/* Header - Responsive */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0'>
            <FaGraduationCap className='text-lg sm:text-2xl text-designColor' />
          </div>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>Formation Académique</h3>
        </div>

        {/* Education Cards */}
        <div className='space-y-6 sm:space-y-8'>
          {educationData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-designColor transition-all duration-500 transform hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-2xl overflow-hidden'
              >
                <div className='relative'>
                  {/* Accent Line */}
                  <div className='absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-designColor to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  
                  <div className='p-4 sm:p-6 lg:p-8'>
                    {/* Main Content Layout - Responsive */}
                    <div className='flex flex-col gap-4 sm:gap-6'>
                      
                      {/* Mobile: Icon + Period at top */}
                      <div className='flex items-center justify-between sm:hidden'>
                        <div className='flex items-center gap-3'>
                          <div className={`w-12 h-12 bg-gradient-to-r ${item.color} bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className='text-lg text-white' />
                          </div>
                          <div className='flex items-center text-designColor font-semibold'>
                            <FaCalendarAlt className='mr-2 text-xs' />
                            <span className='text-xs'>{item.period}</span>
                          </div>
                        </div>
                        
                        {/* Grade Badge - Mobile */}
                        <div className='bg-gradient-to-r from-designColor to-designColor bg-opacity-20 px-3 py-1 rounded-full border border-designColor'>
                          <div className='flex items-center'>
                            <FaAward className='mr-1 text-white text-xs' />
                            <span className='text-white font-semibold text-xs'>{item.grade}</span>
                          </div>
                        </div>
                      </div>

                      {/* Desktop: Side by side layout */}
                      <div className='hidden sm:flex lg:items-start gap-6'>
                        {/* Icon et période - Desktop */}
                        <div className='flex lg:flex-col items-center lg:items-center gap-4 lg:gap-2 lg:w-32 flex-shrink-0'>
                          <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${item.color} bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className='text-xl lg:text-2xl text-white' />
                          </div>
                          <div className='flex items-center text-designColor font-semibold'>
                            <FaCalendarAlt className='mr-2 text-sm' />
                            <span className='text-sm'>{item.period}</span>
                          </div>
                        </div>

                        {/* Main Content - Desktop */}
                        <div className='flex-1 space-y-4'>
                          <div className='flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4'>
                            <div className='flex-1'>
                              <h4 className='text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-designColor transition-colors duration-300 leading-tight'>
                                {item.degree}
                              </h4>
                              <div className='flex items-start text-gray-300 mb-2'>
                                <FaUniversity className='mr-2 text-designColor mt-1 flex-shrink-0' />
                                <span className='font-medium text-sm sm:text-base leading-relaxed'>{item.institution}</span>
                              </div>
                              <div className='flex items-center text-gray-400'>
                                <MdLocationOn className='mr-2 text-designColor flex-shrink-0' />
                                <span className='text-sm'>{item.location}</span>
                              </div>
                            </div>
                            
                            {/* Grade Badge - Desktop */}
                            <div className='bg-gradient-to-r from-designColor to-designColor bg-opacity-20 px-4 py-2 rounded-full border border-designColor flex-shrink-0'>
                              <div className='flex items-center'>
                                <FaAward className='mr-2 text-white text-sm' />
                                <span className='text-white font-semibold text-sm whitespace-nowrap'>{item.grade}</span>
                              </div>
                            </div>
                          </div>

                          {item.description && (
                            <p className='text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Mobile: Main content below */}
                      <div className='sm:hidden space-y-3'>
                        <h4 className='text-lg font-bold text-white group-hover:text-designColor transition-colors duration-300 leading-tight'>
                          {item.degree}
                        </h4>
                        
                        <div className='space-y-2'>
                          <div className='flex items-start text-gray-300'>
                            <FaUniversity className='mr-2 text-designColor mt-1 flex-shrink-0 text-sm' />
                            <span className='font-medium text-sm leading-relaxed'>{item.institution}</span>
                          </div>
                          <div className='flex items-center text-gray-400'>
                            <MdLocationOn className='mr-2 text-designColor flex-shrink-0 text-sm' />
                            <span className='text-sm'>{item.location}</span>
                          </div>
                        </div>

                        {item.description && (
                          <p className='text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 pt-2'>
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Education Summary Stats - Responsive */}
        <div className='mt-8 sm:mt-12 bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-700'>
          <h4 className='text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center'>Parcours Académique</h4>
          
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
            <div className='text-center group'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300'>
                <FaGraduationCap className='text-lg sm:text-2xl text-blue-500' />
              </div>
              <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2'>Master 2</div>
              <div className='text-gray-400 text-xs sm:text-sm'>Ingénierie Logicielle</div>
            </div>

            <div className='text-center group'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300'>
                <MdSchool className='text-lg sm:text-2xl text-green-500' />
              </div>
              <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2'>6 ans</div>
              <div className='text-gray-400 text-xs sm:text-sm'>Formation supérieure</div>
            </div>

            <div className='text-center group'>
              <div className='w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300'>
                <FaUniversity className='text-lg sm:text-2xl text-purple-500' />
              </div>
              <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2'>USTHB</div>
              <div className='text-gray-400 text-xs sm:text-sm'>Université de référence</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Education