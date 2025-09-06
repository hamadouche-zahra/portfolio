import React from 'react'

function ResumeCard({ title, subTitle, result, des, icon: IconComponent, gradientColor = "from-designColor to-designColor" }) {
  return (
    <div className='w-full group flex mb-8'>
      {/* Timeline */}
      <div className='w-10 h-[6px] bg-gray-600 mt-16 relative'>
        <span className='absolute w-6 h-6 rounded-full -top-3 -left-4 flex justify-center items-center bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-600 group-hover:border-designColor transition-all duration-300'>
          <span className='w-3 h-3 rounded-full bg-gray-500 group-hover:bg-designColor duration-300 animate-pulse group-hover:animate-none'></span>
        </span>
        <div className='absolute top-6 left-0 w-full h-20 bg-gradient-to-b from-gray-600 to-transparent opacity-30'></div>
      </div>

      {/* Card Content */}
      <div className='w-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 duration-500 rounded-2xl p-6 lg:px-8 flex flex-col justify-center gap-6 shadow-2xl border border-gray-700 hover:border-designColor transition-all transform hover:scale-[1.02] hover:shadow-designColor/20 ml-4'>
        
        {/* Header */}
        <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-start'>
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-3'>
              {IconComponent && (
                <div className='w-12 h-12 bg-designColor bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <IconComponent className='text-xl text-designColor' />
                </div>
              )}
              <div>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-designColor duration-300 leading-tight'>
                  {title}
                </h3>
              </div>
            </div>
            <p className='text-sm lg:text-base text-gray-400 group-hover:text-gray-300 duration-300 font-medium'>
              {subTitle}
            </p>
          </div>

          {/* Result Badge */}
          <div className='self-start lg:self-center'>
            <div className={`px-4 py-2 bg-gradient-to-r ${gradientColor} bg-opacity-20 rounded-full border border-designColor flex justify-center items-center shadow-lg backdrop-blur-sm`}>
              <p className='text-designColor text-sm font-bold whitespace-nowrap'>
                {result}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className='relative'>
          <div className='absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-designColor to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
          <p className='text-sm md:text-base lg:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 leading-relaxed pl-4'>
            {des}
          </p>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-designColor/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
      </div>
    </div>
  )
}

export default ResumeCard