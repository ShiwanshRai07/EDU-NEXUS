import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from './HeroSection';
import MotoSection from './MotoSection';
import FeatureSection from './FeatureSection';
import AboutUsSection from './AboutUs';


function Landing() {
  return (
    <div>
    <div className="hero-container">
      <div className="hero-background"></div> Background Image
      <Header />
      <HeroSection />
      </div>
      <MotoSection />
      <FeatureSection />
      <AboutUsSection />
      <Footer />
      </div>
  )
}

export default Landing