import React, { useState, createContext, useContext, useEffect } from 'react';
import { Presentation, Slide } from 'react-pptx';
import ConfettiButton from './ConfettiButton';
import './Auction.css';

import DC from './DCoutline.png';
import LSG from './LSGoutline.png';
import MI from './MIoutline.png';
import CSK from './CSKoutline.png';
import RCB from './RCBoutline.png';
import GT from './GToutline.png';
import PBKS from './PBKSoutline.png';
import RR from './RRoutline.png';
import SRH from './SRHoutline.png';
import KKR from './KKRoutline.png';

const teamImages = {
  DC: DC,
  LSG: LSG,
  MI: MI,
  CSK: CSK,
  RCB: RCB,
  GT: GT,
  PBKS: PBKS,
  RR: RR,
  SRH: SRH,
  KKR: KKR,
};

const SlideContext = createContext();

const Auction = () => {
  const [soldPlayers, setSoldPlayers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(() => {
    const storedSlide = localStorage.getItem('currentSlide');
    return storedSlide !== null ? parseInt(storedSlide) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentSlide', currentSlide);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < Object.keys(teamImages).length - 1 ? prevSlide + 1 : prevSlide));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : prevSlide));
  };

  return (
    <SlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
      <div className="container">
        <div className="slideDeck">
          <button className="prev" onClick={handlePrevSlide}>&#10094;</button>
          <Presentation>
            <Slide>
              <img src={teamImages[Object.keys(teamImages)[currentSlide]]} alt="IPL Team" />
            </Slide>
          </Presentation>
          <button className="next" onClick={handleNextSlide}>&#10095;</button>
        </div>
        <ConfettiButton active={soldPlayers.length > 0} onClick={() => setSoldPlayers([...soldPlayers, { team: Object.keys(teamImages)[currentSlide] }])} />
      </div>
    </SlideContext.Provider>
  );
};

export default Auction;

export const useSlideContext = () => useContext(SlideContext);
