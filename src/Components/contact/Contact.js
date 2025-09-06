import React, { useState } from 'react'
import Title from './../layouts/Title'
import { FiSend } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
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
    <section id='contact' className='w-full py-12 sm:py-16 lg:py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center px-4 sm:px-6'>
        <Title title="" des="Contact" />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-8 sm:mb-12 lg:mb-16'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6'>
            Travaillons ensemble
          </h2>
          <p className='text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4'>
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter 
            de vos besoins et voir comment je peux vous aider à concrétiser vos idées.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16'>
          {/* Contact Information */}
          <div className='space-y-6 sm:space-y-8 order-2 xl:order-1'>
            <div>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6'>
                Mes coordonnées
              </h3>
              
              <div className='space-y-4 sm:space-y-6'>
                {/* Email */}
                <div className='flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg sm:rounded-xl border border-gray-700 hover:border-designColor transition-all duration-300 group'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-all duration-300'>
                    <MdEmail className='text-lg sm:text-xl lg:text-2xl text-designColor' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h4 className='text-white font-semibold text-sm sm:text-base lg:text-lg'>Email</h4>
                    <p className='text-gray-300 text-xs sm:text-sm lg:text-base break-all'>
                      zahrahamadouche8@gmail.com
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className='flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg sm:rounded-xl border border-gray-700 hover:border-designColor transition-all duration-300 group'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-all duration-300'>
                    <MdPhone className='text-lg sm:text-xl lg:text-2xl text-designColor' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold text-sm sm:text-base lg:text-lg'>Téléphone</h4>
                    <p className='text-gray-300 text-xs sm:text-sm lg:text-base'>+213 797 141 491</p>
                  </div>
                </div>

                {/* Localisation */}
                <div className='flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg sm:rounded-xl border border-gray-700 hover:border-designColor transition-all duration-300 group'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-all duration-300'>
                    <MdLocationOn className='text-lg sm:text-xl lg:text-2xl text-designColor' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold text-sm sm:text-base lg:text-lg'>Localisation</h4>
                    <p className='text-gray-300 text-xs sm:text-sm lg:text-base'>Algérie</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6'>
                Suivez-moi
              </h3>
              <div className='flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4'>
                <a 
                  href='https://github.com/hamadouche-zahra' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'
                  aria-label="GitHub"
                >
                  <FaGithub className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-designColor group-hover:text-white' />
                </a>
                <a 
                  href='https://www.linkedin.com/in/fatima-zohra-hamadouche-920300220' 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-designColor group-hover:text-white' />
                </a>
                <a 
                  href='https://wa.me/213797141491' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-designColor group-hover:text-white' />
                </a>
                <a 
                  href='mailto:zahrahamadouche8@gmail.com'
                  className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'
                  aria-label="Email"
                >
                  <MdEmail className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-designColor group-hover:text-white' />
                </a>
              </div>
            </div>

           
          </div>

          {/* Contact Form */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-700 order-1 xl:order-2'>
            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center xl:text-left'>
              Envoyez-moi un message
            </h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className='mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg'>
                <p className='text-green-400 text-center text-sm sm:text-base'>
                  Message envoyé avec succès ! Je vous répondrai bientôt.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className='mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg'>
                <p className='text-red-400 text-center text-sm sm:text-base'>
                  Erreur lors de l'envoi. Veuillez réessayer.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
              {/* Name and Email Row */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div>
                  <label htmlFor='name' className='block text-white font-semibold mb-2 text-sm sm:text-base'>
                    Nom complet 
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor transition-all duration-300 text-sm sm:text-base'
                    placeholder='Votre nom complet'
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='block text-white font-semibold mb-2 text-sm sm:text-base'>
                    Email 
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor transition-all duration-300 text-sm sm:text-base'
                    placeholder='votre.email@exemple.com'
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor='subject' className='block text-white font-semibold mb-2 text-sm sm:text-base'>
                  Sujet
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor transition-all duration-300 text-sm sm:text-base'
                  placeholder='Sujet de votre message'
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-white font-semibold mb-2 text-sm sm:text-base'>
                  Message 
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='4'
                  className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-designColor focus:ring-1 focus:ring-designColor transition-all duration-300 resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]'
                  placeholder='Décrivez votre projet ou votre demande...'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-designColor to-designColor hover:from-designColor hover:to-designColor shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className='flex items-center justify-center space-x-2'>
                    <div className='w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  <div className='flex items-center justify-center space-x-2'>
                    <span>Envoyer le message</span>
                    <FiSend className='text-white text-base sm:text-lg' />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className='text-center mt-12 sm:mt-16 lg:mt-20'>
          <div className='bg-gradient-to-r from-gray-800 to-gray-900 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-700'>
            <h3 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6'>
              Prêt à démarrer votre projet ?
            </h3>
            <p className='text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4'>
              Je suis disponible pour discuter de vos besoins et vous proposer des solutions 
              adaptées à votre budget et vos objectifs.
            </p>
            
            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto'>
              <a 
                href='mailto:zahrahamadouche8@gmail.com'
                className='w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-designColor to-designColor hover:from-designColor hover:to-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base'
              >
                <MdEmail className='w-4 h-4 sm:w-5 sm:h-5' />
                <span>Écrivez-moi</span>
              </a>
              <a 
                href='tel:+213797141491'
                className='w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border border-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-designColor hover:bg-opacity-10 flex items-center justify-center gap-2 text-sm sm:text-base'
              >
                <MdPhone className='w-4 h-4 sm:w-5 sm:h-5' />
                <span>Appelez-moi</span>
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className='mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700'>
              <p className='text-gray-400 text-xs sm:text-sm'>
                Réponse garantie sous 24h • Consultation gratuite • Devis personnalisé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact