import React, { useState } from 'react'
import Title from './../layouts/Title'
import { FiSend } from 'react-icons/fi';
import {  FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import emailjs from '@emailjs/browser'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const EMAILJS_SERVICE_ID = "service_48nkidg"
  const EMAILJS_TEMPLATE_ID = "template_57ayorx"
  const EMAILJS_PUBLIC_KEY = "_9xuNkAeAle5XXh1C"

 const handleSubmit = async (e) => {
     e.preventDefault()
     setIsSubmitting(true)
     
     try {
       const templateParams = {
         from_name: formData.name,
         from_email: formData.email,
         subject: formData.subject,
         message: formData.message,
         to_email: 'zahrahamadouche8@gmail.com'
       }
 
       await emailjs.send(
         EMAILJS_SERVICE_ID,
         EMAILJS_TEMPLATE_ID,
         templateParams,
         EMAILJS_PUBLIC_KEY
       )
 
       setIsSubmitting(false)
       setSubmitStatus('success')
       setFormData({ name: '', email: '', subject: '', message: '' })
       
       setTimeout(() => {
         setSubmitStatus('')
       }, 5000)
 
     } catch (error) {
       console.error('Erreur lors de l\'envoi:', error)
       setIsSubmitting(false)
       setSubmitStatus('error')
       
       setTimeout(() => {
         setSubmitStatus('')
       }, 5000)
     }
   }

  return (
    <section id='contact' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title title="" des="Contact" />
      </div>

      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Travaillons ensemble
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter 
            de vos besoins et voir comment je peux vous aider à concrétiser vos idées.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Informations de contact */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>Mes coordonnées</h3>
              
              <div className='space-y-6'>
                {/* Email */}
                <div className='flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-designColor transition-all duration-300'>
                  <div className='w-12 h-12 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center'>
                    <MdEmail className='text-xl text-designColor' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold'>Email</h4>
                    <p className='text-gray-300'>zahrahamadouche8@gmail.com</p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className='flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-designColor transition-all duration-300'>
                  <div className='w-12 h-12 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center'>
                    <MdPhone className='text-xl text-designColor' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold'>Téléphone</h4>
                    <p className='text-gray-300'>+213 797 141 491</p>
                  </div>
                </div>

                {/* Localisation */}
                <div className='flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-designColor transition-all duration-300'>
                  <div className='w-12 h-12 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center'>
                    <MdLocationOn className='text-xl text-designColor' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold'>Localisation</h4>
                    <p className='text-gray-300'>Algérie</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>Suivez-moi</h3>
              <div className='flex space-x-4'>
                <a 
                   href='https://github.com/hamadouche-zahra' 
                   target='_blank' 
                   rel='noopener noreferrer'
                  className='w-12 h-12 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'
                >
                  <FaGithub className='w-5 h-5 text-designColor group-hover:text-white' />
                </a>
                <a 
                  href='https://www.linkedin.com/in/fatima-zohra-hamadouche-920300220' 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='w-12 h-12 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'
                >
                  <FaLinkedinIn className='w-5 h-5 text-designColor group-hover:text-white' />
                </a>
                <a 
                  href='https://wa.me/213797141491' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='w-12 h-12 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'
                >
                  <FaWhatsapp className='w-5 h-5 text-designColor group-hover:text-white' />
                </a>
                <a 
                  href='mailto:zahrahamadouche8@gmail.com' 
                  className='w-12 h-12 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'
                >
                  <MdEmail className='w-5 h-5 text-designColor group-hover:text-white' />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700'>
            <h3 className='text-2xl font-bold text-white mb-6'>Envoyez-moi un message</h3>
            
            {submitStatus === 'success' && (
              <div className='mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg'>
                <p className='text-green-400 text-center'>Message envoyé avec succès ! Je vous répondrai bientôt.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='name' className='block text-white font-semibold mb-2'>
                    Nom complet 
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor transition-all duration-300'
                    placeholder='Votre nom complet'
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='block text-white font-semibold mb-2'>
                    Email 
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor transition-all duration-300'
                    placeholder='votre.email@exemple.com'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='subject' className='block text-white font-semibold mb-2'>
                  Sujet 
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor transition-all duration-300'
                  placeholder='Sujet de votre message'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-white font-semibold mb-2'>
                  Message 
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='6'
                  className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor transition-all duration-300 resize-none'
                  placeholder='Décrivez votre projet ou votre demande...'
                ></textarea>
              </div>

          <button
           type='submit'
           disabled={isSubmitting}
           className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
           isSubmitting
           ? 'bg-gray-600 cursor-not-allowed'
           : 'bg-gradient-to-r from-designColor to-designColor hover:from-designColor hover:to-designColor shadow-lg'
          }`}
          >
          {isSubmitting ? (
           <div className='flex items-center justify-center space-x-2'>
            <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
            <span>Envoi en cours...</span>
          </div>
          ) : (
         <div className='flex items-center justify-center space-x-2'>
         <span>Envoyer le message</span>
         <FiSend className='text-white text-lg' />
         </div>
        )}
      </button>

            </form>
          </div>
        </div>

        {/* Call to action */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Prêt à démarrer votre projet ?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Je suis disponible pour discuter de vos besoins et vous proposer des solutions 
              adaptées à votre budget et vos objectifs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='mailto:zahrahamadouche8@gmail.com'
                className='px-8 py-4 bg-gradient-to-r from-designColor to-designColor hover:from-designColor hover:to-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2'
              >
                <MdEmail className='w-5 h-5' />
                Écrivez-moi
              </a>
              <a 
                href='tel:+213797141491'
                className='px-8 py-4 border border-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'
              >
                <MdPhone className='w-5 h-5' />
                Appelez-moi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact