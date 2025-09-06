import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCode, FaExternalLinkAlt, FaDatabase, FaCog, FaUsers, FaShoppingCart, FaCalendarAlt, FaBrain, FaTruck, FaCar } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiMongodb,SiMysql, SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiAndroid, SiLaravel, SiPhp } from 'react-icons/si'
import { DiJava } from "react-icons/di";

function Experience() {
  const [activeTab, setActiveTab] = useState('professional')

  const professionalExperience = [
    {
      id: 1,
      title: "Développeuse Full-Stack & Mobile",
      company: "DATA INTUITION",
      period: "09/2023 – Aujourd'hui",
      type: "CDI",
      location: "Alger, Algérie",
      icon: FaBriefcase,
      color: "from-blue-500 to-purple-600",
      description: "Conception et développement d'interfaces web dynamiques avec React.js et d'applications mobiles performantes avec React Native (Android).",
      responsibilities: [
        "Création et maintenance d'API RESTful avec Node.js/Express.js",
        "Intégration de Stripe pour les paiements et de services tiers (Twilio, Infobip, Firebase)",
        "Gestion et administration des dépôts GitHub",
        "Assurance qualité, performance et sécurité des applications",
        "Développement d'application interne de gestion clients et facturation"
      ],
      technologies: [SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript, SiTailwindcss],
      achievements: [
        "Développement de Chilah Shop - Application interne de gestion",
        "Optimisation des performances des applications de 40%",
        "Mise en place d'une architecture scalable"
      ]
    }
  ]

  const projects = [
    {
      id: 1,
      title: "b2bglob",
      subtitle: "Plateforme B2B de Transport",
      period: "2023",
      status: "En production",
      url: "https://b2bglob.com",
      icon: FaTruck,
      color: "from-green-500 to-teal-600",
      description: "Plateforme B2B web et mobile de transport innovante, permettant aux entreprises de gérer leurs comptes et leurs réservations de transport avec chauffeurs.",
      role: "Développement web & mobile, intégration API et gestion des utilisateurs",
      technologies: [SiReact, SiNodedotjs, SiMongodb],
      features: [
        "Interface web responsive",
        "Application mobile React Native",
        "Gestion des réservations en temps réel",
        "Système de géolocalisation"
      ]
    },
    {
      id: 2,
      title: "EventZone",
      subtitle: "Plateforme de Gestion d'Événements",
      period: "2025",
      status: "En production",
      url: "https://www.eventzone.pro",
      icon: FaCalendarAlt,
      color: "from-purple-500 to-pink-600",
      description: "Plateforme de gestion et d'organisation d'événements permettant aux utilisateurs de créer, planifier et suivre leurs événements en ligne.",
      role: "Développement front-end & back-end (modules, UX et optimisation)",
      technologies: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss],
      features: [
        "Création d'événements intuitifs",
        "Gestion des participants",
        "Système de notifications",
        "Dashboard analytique"
      ]
    },
    {
      id: 3,
      title: "FFWDNOW",
      subtitle: "Plateforme d'Intelligence Artificielle",
      period: "2025",
      status: "En production",
      url: "https://ffwdnow.ai",
      icon: FaBrain,
      color: "from-indigo-500 to-blue-600",
      description: "Plateforme d'intelligence artificielle avancée.",
      role: "Développement du front-end avec React.js & TypeScript et intégration des services via Supabase",
      technologies: [SiReact, SiTypescript],
      features: [
        "Interface IA intuitive",
        "Intégration Supabase",
        "Optimisation des performances",
        "Design moderne et responsive"
      ]
    },
   
    {
    id: 4,
    title: "Site de Rachat de Véhicules",
    subtitle: "Plateforme B2B Interne",
    period: "10/2023 - 11/2023",
    status: "Freelance",
    icon: FaCar,
    color: "from-orange-500 to-red-600",
    description: "Projet freelance avec FOXYDEVS : Site de Rachat de Véhicules aux Particuliers.",
    role: "Développeur Full-Stack",
    technologies: [SiReact, SiNodedotjs, SiMongodb],
    features: [
      "Conception et développement des interfaces utilisateur avec React.js",
      "Backend robuste avec Node.js",
      "Base de données MongoDB (55 000 descriptifs de voitures)",
      "Systèmes d'emails automatisés pour les administrateurs"
    ]
  },
  {
    id: 5,
    title: "API Payante pour Véhicules",
    subtitle: "Exploitation des données de véhicule B2B",
    period: "02/2024 - 04/2024",
    status: "Freelance",
    icon: FaDatabase,
    color: "from-cyan-500 to-blue-600",
    description: "Projet freelance avec FOXYDEVS : API Payante pour l’exploitation des données de véhicule B2B.",
    role: "Développeur Full-Stack",
    technologies: [SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb],
    features: [
      "Design de l'architecture de l’API",
      "Mise en place du site vitrine avec React.js",
      "Backend API avec Node.js et Express.js",
      "Gestion des paiements et facturation",
      "Base SQL pour transactions et utilisateurs",
      "MongoDB pour données de véhicules"
    ]
  },
    {
      id: 6,
      title: "Application Myda",
      subtitle: "Livraison Alimentaire Mobile",
      period: "2022",
      status: "Non déployée",
      icon: FaShoppingCart,
      color: "from-yellow-500 to-orange-600",
      description: "Application mobile de livraison alimentaire mettant en relation clients, vendeurs (artisans) et livreurs.",
      role: "Développement de la partie mobile avec React Native",
      technologies: [SiReact, SiNodedotjs],
      features: [
        "Gestion multi-utilisateurs",
        "Système de commandes",
        "Intégration paiements",
        "Géolocalisation livreurs"
      ]
    }
  ]

  const academicProjects = [
    {
      id: 1,
      title: "Système d'aide à la Conception et l'évaluation des Formations Universitaires",
      subtitle: "PFE Master 2",
      period: "2022",
      icon: FaGraduationCap,
      color: "from-blue-500 to-indigo-600",
      description: "Application permettant aux entreprises de présenter leurs métiers et de proposer des offres d'emploi et des stages.",
      technologies: [SiLaravel, SiPhp],
      features: [
        "Création de formations basées sur les compétences",
        "Évaluation et amélioration des offres",
        "Feedback des diplômés et entreprises",
        "Interface d'administration complète"
      ]
    },
    {
      id: 2,
      title: "Application Bloggar",
      subtitle: "Projet Personnel",
      period: "2023",
      icon: FaCode,
      color: "from-green-500 to-blue-600",
      description: "Application web permettant aux utilisateurs de se connecter et de gérer les publications et commentaires.",
      technologies: [SiReact, SiNodedotjs, SiMongodb],
      features: [
        "Authentification sécurisée",
        "Gestion des publications",
        "Système de commentaires",
        "Interface utilisateur moderne"
      ]
    },
    {
      id: 3,
      title: "Détection de Malware Android",
      subtitle: "PFE Licence",
      period: "2020",
      icon: SiAndroid,
      color: "from-red-500 to-pink-600",
      description: "Analyse statique d'applications Android pour détecter les malwares en utilisant des techniques de clustering.",
      technologies: [DiJava],
      features: [
        "Analyse statique avancée",
        "Algorithmes de clustering",
        "Détection de malwares",
        "Interface desktop Java"
      ]
    }
  ]

  const ProjectCard = ({ project, type = "project" }) => {
    const IconComponent = project.icon
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-designColor transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden'
      >
        <div className='relative'>
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
          
          <div className='p-6 lg:p-8'>
            {/* Header */}
            <div className='flex items-start justify-between mb-6'>
              <div className='flex items-center gap-4'>
                <div className={`w-14 h-14 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className='text-2xl text-white' />
                </div>
                <div>
                  <h3 className='text-xl lg:text-2xl font-bold text-white group-hover:text-designColor transition-colors duration-300'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 font-medium'>{project.subtitle}</p>
                </div>
              </div>
              
              <div className='flex flex-col items-end gap-2'>
                <div className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-full border border-current`}>
                  <span className='text-white text-sm font-semibold'>{project.period}</span>
                </div>
                {project.status && (
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'En production' 
                      ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500' 
                      : project.status === 'Interne'
                      ? 'bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500'
                      : 'bg-gray-500 bg-opacity-20 text-gray-400 border border-gray-500'
                  }`}>
                    {project.status}
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <p className='text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300'>
              {project.description}
            </p>

            {/* Role (for projects) or Features */}
            {project.role && (
              <div className='mb-6'>
                <h4 className='text-designColor font-semibold mb-2'>Mon rôle :</h4>
                <p className='text-gray-400 text-sm'>{project.role}</p>
              </div>
            )}

            {/* Features/Responsibilities */}
            {(project.features || project.responsibilities) && (
              <div className='mb-6'>
                <h4 className='text-white font-semibold mb-3'>
                  {project.features ? 'Fonctionnalités clés :' : 'Responsabilités :'}
                </h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {(project.features || project.responsibilities)?.map((item, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-designColor rounded-full'></div>
                      <span className='text-gray-300 text-sm'>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className='mb-6'>
              <h4 className='text-white font-semibold mb-3'>Technologies :</h4>
              <div className='flex flex-wrap gap-3'>
                {project.technologies?.map((TechIcon, index) => (
                  <div key={index} className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300'>
                    <TechIcon className='text-lg text-white' />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            {project.url && (
              <div className='flex gap-3'>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-designColor to-designColor hover:from-designColor hover:to-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-sm'
                >
                  <FaExternalLinkAlt className='text-sm' />
                  Voir le site
                </a>
              </div>
            )}

            {/* Professional experience specific */}
            {project.achievements && (
              <div className='mt-6 pt-6 border-t border-gray-700'>
                <h4 className='text-white font-semibold mb-3'>Réalisations :</h4>
                <div className='space-y-2'>
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                      <span className='text-gray-300 text-sm'>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full py-10'
    >
      {/* Navigation Tabs */}
     <div className="flex justify-center mb-12">
  <div className="bg-gray-900 p-2 rounded-full border border-gray-700 shadow-md flex gap-2">
    <button
      onClick={() => setActiveTab('professional')}
      className={`
        relative flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300
        ${activeTab === 'professional'
          ? 'bg-gradient-to-r from-[#ff014f] to-pink-600 text-white shadow-lg shadow-pink-500/40 scale-105'
          : 'text-gray-400 hover:text-white hover:bg-gray-800'}
      `}
    >
      {activeTab === 'professional' && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff014f] to-pink-600 opacity-30 blur-lg"></span>
      )}
      <FaBriefcase className="text-lg relative z-10" />
      <span className="hidden sm:inline relative z-10">Expérience Pro</span>
    </button>

    <button
      onClick={() => setActiveTab('projects')}
      className={`
        relative flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300
        ${activeTab === 'projects'
          ? 'bg-gradient-to-r from-[#ff014f] to-pink-600 text-white shadow-lg shadow-pink-500/40 scale-105'
          : 'text-gray-400 hover:text-white hover:bg-gray-800'}
      `}
    >
      {activeTab === 'projects' && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff014f] to-pink-600 opacity-30 blur-lg"></span>
      )}
      <FaCode className="text-lg relative z-10" />
      <span className="hidden sm:inline relative z-10">Projets</span>
    </button>

    <button
      onClick={() => setActiveTab('academic')}
      className={`
        relative flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300
        ${activeTab === 'academic'
          ? 'bg-gradient-to-r from-[#ff014f] to-pink-600 text-white shadow-lg shadow-pink-500/40 scale-105'
          : 'text-gray-400 hover:text-white hover:bg-gray-800'}
      `}
    >
      {activeTab === 'academic' && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff014f] to-pink-600 opacity-30 blur-lg"></span>
      )}
      <FaGraduationCap className="text-lg relative z-10" />
      <span className="hidden sm:inline relative z-10">Académique</span>
    </button>
  </div>
</div>


      {/* Content */}
      <div className='space-y-8'>
        {/* Professional Experience */}
        {activeTab === 'professional' && (
          <div>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center'>
                <FaBriefcase className='text-2xl text-blue-500' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-white'>Expérience Professionnelle</h2>
            </div>
            {professionalExperience.map((exp) => (
              <ProjectCard key={exp.id} project={exp} type="professional" />
            ))}
          </div>
        )}

        {/* Projects */}
        {activeTab === 'projects' && (
          <div>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-12 h-12 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center'>
                <FaCode className='text-2xl text-green-500' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-white'>Projets Réalisés</h2>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} type="project" />
              ))}
            </div>
          </div>
        )}

        {/* Academic Projects */}
        {activeTab === 'academic' && (
          <div>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-12 h-12 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center'>
                <FaGraduationCap className='text-2xl text-purple-500' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-white'>Projets Académiques</h2>
            </div>
            <div className='space-y-8'>
              {academicProjects.map((project) => (
                <ProjectCard key={project.id} project={project} type="academic" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className='mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700'>
        <h3 className='text-2xl font-bold text-white mb-8 text-center'>Aperçu de mon Parcours</h3>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center group'>
            <div className='w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
              <FaBriefcase className='text-2xl text-blue-500' />
            </div>
            <div className='text-3xl font-bold text-white mb-2'>1+</div>
            <div className='text-gray-400'>Année d'expérience</div>
          </div>

          <div className='text-center group'>
            <div className='w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
              <FaCode className='text-2xl text-green-500' />
            </div>
            <div className='text-3xl font-bold text-white mb-2'>8+</div>
            <div className='text-gray-400'>Projets réalisés</div>
          </div>

          <div className='text-center group'>
            <div className='w-16 h-16 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
              <FaUsers className='text-2xl text-purple-500' />
            </div>
            <div className='text-3xl font-bold text-white mb-2'>5+</div>
            <div className='text-gray-400'>Clients satisfaits</div>
          </div>

          <div className='text-center group'>
            <div className='w-16 h-16 bg-orange-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
              <FaCog className='text-2xl text-orange-500' />
            </div>
            <div className='text-3xl font-bold text-white mb-2'>15+</div>
            <div className='text-gray-400'>Technologies maîtrisées</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience