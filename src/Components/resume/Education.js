import React from 'react'
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
      description: "Objectif : acquérir des compétences en ingénierie des logiciels permettant d’intégrer le monde professionnel pour la conception, le développement et l’assurance qualité des systèmes logiciels.",
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
      description: "Objectif : maîtriser les compétences disciplinaires en ingénierie des logiciels et des systèmes d’information pour être opérationnel dans le milieu professionnel, comprendre les fonctions et objectifs de l’entreprise, et coopérer efficacement.",
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
    <div className='w-full py-10'>
      {/* Section Diplômes */}
      <div className='mb-16'>
        <div className='flex items-center mb-8'>
          <div className='w-12 h-12 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center mr-4'>
            <FaGraduationCap className='text-2xl text-designColor' />
          </div>
          <h3 className='text-2xl font-bold text-white'>Formation Académique</h3>
        </div>

        <div className='space-y-8'>
          {educationData.map((item) => {
            const IconComponent = item.icon
            return (
              <div 
                key={item.id}
                className='group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-designColor transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden'
              >
                <div className='relative'>
                  <div className='absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-designColor to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  
                  <div className='p-8'>
                    <div className='flex flex-col lg:flex-row lg:items-start gap-6'>
                      {/* Icon et période */}
                      <div className='flex items-center lg:flex-col lg:items-center gap-4 lg:gap-2 lg:w-32 flex-shrink-0'>
                        <div className={`w-16 h-16 bg-gradient-to-r ${item.color} bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className='text-2xl text-white' />
                        </div>
                        <div className='flex items-center text-designColor font-semibold'>
                          <FaCalendarAlt className='mr-2 text-sm' />
                          <span className='text-sm'>{item.period}</span>
                        </div>
                      </div>

                      {/* Contenu principal */}
                      <div className='flex-1 space-y-4'>
                        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
                          <div>
                            <h4 className='text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-designColor transition-colors duration-300'>
                              {item.degree}
                            </h4>
                            <div className='flex items-center text-gray-300 mb-2'>
                              <FaUniversity className='mr-2 text-designColor' />
                              <span className='font-medium'>{item.institution}</span>
                            </div>
                            <div className='flex items-center text-gray-400'>
                              <MdLocationOn className='mr-2 text-designColor' />
                              <span className='text-sm'>{item.location}</span>
                            </div>
                          </div>
                          
                          <div className='bg-gradient-to-r from-designColor to-designColor bg-opacity-20 px-4 py-2 rounded-full border border-designColor'>
                            <div className='flex items-center'>
                              <FaAward className='mr-2 text-white text-sm' />
                              <span className='text-white font-semibold text-sm'>{item.grade}</span>
                            </div>
                          </div>
                        </div>

                        {item.description && (
                          <p className='text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Education
