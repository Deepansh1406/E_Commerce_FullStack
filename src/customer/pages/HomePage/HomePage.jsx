import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarsosel from '../../components/HomeSectionCarosel/HomeSectionCarsosel'
import { mens_kurta } from '../../../data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
  <HomeSectionCarsosel data={mens_kurta} sectionName={"Men's Kurta"} />
  <HomeSectionCarsosel data={mens_kurta} sectionName={"Men's Shoes"}/>
  <HomeSectionCarsosel data={mens_kurta} sectionName={"Mens watch"}/>
  <HomeSectionCarsosel data={mens_kurta} sectionName={"MEns' hairProducts"}/>
  <HomeSectionCarsosel data={mens_kurta} sectionName={"Mens gym fits"}/>
    </div>
        
    </div>
  )
}

export default HomePage