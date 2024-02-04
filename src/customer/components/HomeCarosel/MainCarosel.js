import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarsoselData } from './MainCaroselData';
import 'react-alice-carousel/lib/alice-carousel.css';


const items = mainCarsoselData.map((item) => (
  <img className='cursor-pointer object-fill object-top w-full  lg:h-[30rem] mt-5 ' role='presentation' src={item.image} alt="" key={item.image} />
));

const MainCarousel = () => (
  <AliceCarousel items={items}
  disableButtonsControls
  autoPlay
  autoPlayInterval={1000}
  infinite
  
   />
);

export default MainCarousel;
