// components/About.tsx
import React from 'react';
import { aboutData } from '@/data/aboutme/aboutData';
import AboutHero from '@/components/about-me/AboutHero';
import AboutBiography from '@/components/about-me/AboutBiography';
import AboutApproach from '@/components/about-me/AboutApproach';
import AboutResults from '@/components/about-me/AboutResults';
import AboutIsForYou from '@/components/about-me/AboutIsForYou';
import AboutCommitment from '@/components/about-me/AboutCommitment';
import AboutGallery from '@/components/about-me/AboutGallery';
import AboutCTA from '@/components/about-me/AboutCTA';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AboutHero
        name={aboutData.name}
        title={aboutData.title}
        license={aboutData.license}
        specialties={aboutData.specialties}
        tagline={aboutData.tagline}
        profileImage={aboutData.images.profile}
      />
      
      <AboutBiography 
        biography={aboutData.biography}
        images={{
          terapiaHolistica: aboutData.images.terapiaHolistica,
          workspace1: aboutData.images.workspace1,
          tarot: aboutData.images.tarot
        }}
      />
      
      <AboutApproach approach={aboutData.approach} />   
      
      <AboutResults results={aboutData.results} />
      
      <AboutGallery workspace2={aboutData.images.workspace2} />
      
      <AboutIsForYou isThisForYou={aboutData.isThisForYou} />
      
      <AboutCommitment commitment={aboutData.commitment} />
      
  
      <AboutCTA cta={aboutData.cta} />
    </div>
  );
};

export default About;